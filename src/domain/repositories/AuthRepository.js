import PasswordResetCode from "../models/PasswordResetCode.js";
import { Op } from "sequelize";

export default class AuthRepository {
  static async createPasswordResetCode(dto) {
    return await PasswordResetCode.create(dto);
  }

  static async findPasswordResetCode(userId) {
    return await PasswordResetCode.findOne({
      where: {
        user_id: userId,
        expires_at: { [Op.gt]: new Date() },
      },
    });
  }

  static async deletePasswordResetCode(userId) {
    return await PasswordResetCode.destroy({ where: { user_id: userId } });
  }
}
