import User from "../models/User.js";

export default class UserRepository {
  static async create(userDTO) {
    return await User.create(userDTO);
  }

  static async findAll() {
    return await User.findAll();
  }

  static async findById(id) {
    return await User.findByPk(id);
  }

  static async findByEmail(email) {
    return await User.findOne({ where: { email } });
  }

  static async findByPhone(phone) {
    return await User.findOne({ where: { phone } });
  }

  static async update(id, updatedData) {
    const [affectedCount, [updatedUser]] = await User.update(updatedData, {
      where: { id },
      returning: true,
    });
    if (affectedCount === 0) return null;
    return updatedUser;
  }

  static async delete(id) {
    return await User.destroy({
      where: { id },
    });
  }
}
