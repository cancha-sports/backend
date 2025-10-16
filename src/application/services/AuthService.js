import UserRepository from "../../domain/repositories/UserRepository.js";
import { hashPassword, checkPasswordHash } from "../../shared/utils/hash.js";
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
      role_id: registerDTO.role_id,
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

  static async login(loginDTO) {
    const user = await UserRepository.findByEmail(loginDTO.email);
    if (!user) {
      throw new AppError("Invalid email or password.", 401);
    }

    // Check password
    const isPasswordValid = await checkPasswordHash(
      loginDTO.password,
      user.password_hash
    );
    if (!isPasswordValid) {
      throw new AppError("Invalid email or password.", 401);
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
      role_id: user.role_id,
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
}
