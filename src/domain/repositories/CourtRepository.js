import Court from "../models/Court.js";

export default class CourtRepository {
  static async create(courtDTO) {
    return await Court.create(courtDTO);
  }

  static async findAll() {
    return await Court.findAll({
      order: [["name", "ASC"]],
    });
  }

  static async findById(id) {
    return await Court.findByPk(id);
  }

  static async findByEstablishmentId(establishment_id) {
    return await Court.findAll({ where: { establishment_id } });
  }

  static async update(id, updatedData) {
    const [affectedCount, [updatedCourt]] = await Court.update(updatedData, {
      where: { id },
      returning: true,
    });
    if (affectedCount === 0) return null;
    return updatedCourt;
  }

  static async delete(id) {
    return await Court.destroy({
      where: { id },
    });
  }
}
