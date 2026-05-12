import UserRepository from "../../domain/repositories/UserRepository.js";
import AuthRepository from "../../domain/repositories/AuthRepository.js";
import { EmailService } from "../../shared/utils/mailer.js";
import { hashPassword, checkPasswordHash } from "../../shared/utils/hash.js";
import generateRandomCode from "../../shared/utils/generateRandomCode.js";
import AppError from "../../shared/errors/AppError.js";
import jwt from "jsonwebtoken";

export default class AuthService {
  static async register(registerDTO) {
    // Check if user already exists
    const existingUser = await UserRepository.findByEmail(registerDTO.email);
    if (existingUser) {
      throw new AppError("User with this email already exists.", 400);
    }

    const existingPhone = await UserRepository.findByPhone(registerDTO.phone);
    if (existingPhone) {
      throw new AppError("User with this phone already exists.", 400);
    }

    // Hash password
    const hashedPassword = await hashPassword(registerDTO.password);

    const userData = {
      name: registerDTO.name,
      email: registerDTO.email,
      phone: registerDTO.phone,
      password_hash: hashedPassword,
      birth_date: registerDTO.birth_date,
      role: registerDTO.role,
      photo: registerDTO.photo,
    };

    const createdUser = await UserRepository.create(userData);
    if (!createdUser) {
      throw new AppError("Unable to create user.", 400);
    }

    // Generate JWT token
    const token = this.generateToken(createdUser);

    // Remove password from response
    const { password_hash, ...userWithoutPassword } = createdUser.toJSON
      ? createdUser.toJSON()
      : createdUser;

    return { user: userWithoutPassword, token };
  }

  static async loginOwner(loginDTO) {
    const user = await UserRepository.findByEmail(loginDTO.email);
    if (!user) {
      throw new AppError("Invalid email or password.", 401);
    }

    // Check password
    const isPasswordValid = await checkPasswordHash(
      loginDTO.password,
      user.password_hash,
    );
    if (!isPasswordValid) {
      throw new AppError("Invalid email or password.", 401);
    }

    if (user.role !== "owner") {
      throw new AppError("Access denied. Only court owners can login.", 403);
    }

    // Generate JWT token
    const token = this.generateToken(user);

    // Remove password from response
    const { password_hash, ...userWithoutPassword } = user.toJSON
      ? user.toJSON()
      : user;

    return { user: userWithoutPassword, token };
  }

  static async loginUser(loginDTO) {
    const user = await UserRepository.findByEmail(loginDTO.email);
    if (!user) {
      throw new AppError("Invalid email or password.", 401);
    }

    // Check password
    const isPasswordValid = await checkPasswordHash(
      loginDTO.password,
      user.password_hash,
    );
    if (!isPasswordValid) {
      throw new AppError("Invalid email or password.", 401);
    }

    if (user.role !== "customer") {
      throw new AppError("Access denied. Only regular users can login.", 403);
    }

    // Generate JWT token
    const token = this.generateToken(user);

    // Remove password from response
    const { password_hash, ...userWithoutPassword } = user.toJSON
      ? user.toJSON()
      : user;

    return { user: userWithoutPassword, token };
  }

  static generateToken(user) {
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    });
  }

  static verifyToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      throw new AppError("Invalid or expired token.", 401);
    }
  }

  static async getCurrentUser(userId) {
    const user = await UserRepository.findById(userId);
    if (!user) {
      throw new AppError("User not found.", 404);
    }

    // Remove password from response
    const { password_hash, ...userWithoutPassword } = user.toJSON
      ? user.toJSON()
      : user;

    return userWithoutPassword;
  }

  static async forgotPassword(email) {
    const user = await UserRepository.findByEmail(email);
    if (!user) {
      throw new AppError("Email not registered.", 404);
    }

    const code = generateRandomCode(6);
    const codeHash = await hashPassword(code);
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    await AuthRepository.createPasswordResetCode({
      user_id: user.id,
      code_hash: codeHash,
      expires_at: expiresAt,
    });

    await EmailService.sendEmailPasswordReset(user.email, code);
  }

  static async validateResetCode(email, code) {
    const user = await UserRepository.findByEmail(email);
    if (!user) {
      throw new AppError("User not found.", 400);
    }

    const resetCodeRecord = await AuthRepository.findPasswordResetCode(user.id);
    if (!resetCodeRecord) {
      throw new AppError("Code expired or not found.", 400);
    }

    const isCodeValid = await checkPasswordHash(
      code,
      resetCodeRecord.code_hash,
    );
    if (!isCodeValid) {
      throw new AppError("Invalid code.", 400);
    }

    return true;
  }

  static async resetPassword(email, code, newPassword) {
    const user = await UserRepository.findByEmail(email);
    if (!user) {
      throw new AppError("User not found.", 400);
    }

    const resetCodeRecord = await AuthRepository.findPasswordResetCode(user.id);
    if (!resetCodeRecord) {
      throw new AppError("Code expired or not found.", 400);
    }

    const isCodeValid = await checkPasswordHash(
      code,
      resetCodeRecord.code_hash,
    );
    if (!isCodeValid) {
      throw new AppError("Invalid code.", 400);
    }

    const newPasswordHash = await hashPassword(newPassword);
    await UserRepository.update(user.id, { password_hash: newPasswordHash });

    await AuthRepository.deletePasswordResetCode(user.id);
  }

  static async changePassword(userId, currentPassword, newPassword) {
    const user = await UserRepository.findById(userId);
    if (!user) {
      throw new AppError("Usuário não encontrado.", 404);
    }

    const isValid = await checkPasswordHash(
      currentPassword,
      user.password_hash,
    );
    if (!isValid) {
      throw new AppError("Senha atual incorreta.", 401);
    }

    const hashedNew = await hashPassword(newPassword);
    await UserRepository.update(userId, { password_hash: hashedNew });
    return { message: "Senha alterada com sucesso." };
  }
}
