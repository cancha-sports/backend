import RecreationArea from "../models/RecreationArea.js";

export default class RecreationAreaRepository {
  static async create(recreationAreaDTO) {
    return await RecreationArea.create(recreationAreaDTO);
  }

  static async findAll() {
    return await RecreationArea.findAll({
      order: [["name", "ASC"]],
    });
  }

  static async findById(id) {
    return await RecreationArea.findByPk(id);
  }

  static async findByEstablishmentId(establishment_id) {
    return await RecreationArea.findAll({ where: { establishment_id } });
  }

  static async update(id, updatedData) {
    const [affectedCount, [updatedRecreationArea]] =
      await RecreationArea.update(updatedData, {
        where: { id },
        returning: true,
      });
    if (affectedCount === 0) return null;
    return updatedRecreationArea;
  }

  static async delete(id) {
    return await RecreationArea.destroy({
      where: { id },
    });
  }
}
