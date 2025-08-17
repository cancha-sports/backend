import UserRepository from "../../domain/repositories/UserRepository.js";
import { hashPassword } from "../../shared/utils/hash.js";
import AppError from "../../shared/errors/AppError.js";

export default class UserService {
  static async create(userDTO) {
    const hashedPassword = await hashPassword(userDTO.password);
    const userData = {
      name: userDTO.name,
      email: userDTO.email,
      phone: userDTO.phone,
      password_hash: hashedPassword,
      birth_date: userDTO.birth_date,
      role_id: userDTO.role_id,
    };
    const created = await UserRepository.create(userData);
    if (!created) {
      throw new AppError("Unable to create user.", 400);
    }
    return created;
  }

  static async findAll() {
    const users = await UserRepository.findAll();
    if (users.length === 0) {
      throw new AppError("No users found", 404);
    }
    return users;
  }

  static async findById(id) {
    const user = await UserRepository.findById(id);
    if (!user) {
      throw new AppError(`User with id ${id} not found`, 404);
    }
    return user;
  }

  static async delete(id) {
    const deletedCount = await UserRepository.delete(id);
    if (deletedCount === 0) {
      throw new AppError(`User with id ${id} not found`, 404);
    }
    return { message: "User deleted successfully." };
  }
}
