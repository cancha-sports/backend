import RecreationAreaType from "../models/RecreationAreaType.js";

export default class RecreationAreaTypeRepository {
  static async create(recreationAreaTypeDTO) {
    return await RecreationAreaType.create(recreationAreaTypeDTO);
  }

  static async findAll() {
    return await RecreationAreaType.findAll({
      order: [["name", "ASC"]],
    });
  }

  static async findById(id) {
    return await RecreationAreaType.findByPk(id);
  }

  static async update(id, updatedData) {
    const [affectedCount, [updatedRecreationAreaType]] =
      await RecreationAreaType.update(updatedData, {
        where: { id },
        returning: true,
      });
    if (affectedCount === 0) return null;
    return updatedRecreationAreaType;
  }

  static async delete(id) {
    return await RecreationAreaType.destroy({
      where: { id },
    });
  }
}
