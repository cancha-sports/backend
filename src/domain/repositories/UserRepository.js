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

  static async delete(id) {
    return await User.destroy({
      where: { id },
    });
  }
}
