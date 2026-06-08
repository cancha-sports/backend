import UserRepository from "../../domain/repositories/UserRepository.js";
import CourtBookingRepository from "../../domain/repositories/CourtBookingRepository.js";
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
      role: userDTO.role,
      photo: userDTO.photo,
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

  static async update(id, updatedData) {
    const userData = {
      name: updatedData.name,
      photo: updatedData.photo,
    };

    if (updatedData.password) {
      userData.password_hash = await hashPassword(updatedData.password);
    }

    const updated = await UserRepository.update(id, userData);
    if (!updated) {
      throw new AppError(`Unable to update user with id ${id}.`, 400);
    }
    return updated;
  }

  static async delete(id) {
    const activeBookings =
      await CourtBookingRepository.findUpcomingByUserId(id);
    if (activeBookings.length > 0) {
      throw new AppError(
        "You can't delete your account because you have future reservations. Cancel them first.",
        400,
      );
    }

    const deletedCount = await UserRepository.delete(id);
    if (deletedCount === 0) {
      throw new AppError(`User with id ${id} not found`, 404);
    }
    return { message: "User deleted successfully." };
  }
}
