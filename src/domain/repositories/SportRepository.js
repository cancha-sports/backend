import Sport from "../models/Sport.js";

export default class SportRepository {
  static async create(sportDTO) {
    return await Sport.create(sportDTO);
  }

  static async findAll() {
    return await Sport.findAll({
      order: [["name", "ASC"]],
    });
  }

  static async findById(id) {
    return await Sport.findByPk(id);
  }

  static async update(id, updatedData) {
    const [affectedCount, [updatedSport]] = await Sport.update(updatedData, {
      where: { id },
      returning: true,
    });
    if (affectedCount === 0) return null;
    console.log("repositório");
    return updatedSport;
  }

  static async delete(id) {
    return await Sport.destroy({
      where: { id },
    });
  }
}
