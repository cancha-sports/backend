import RecreationAreaSchedule from "../models/RecreationAreaSchedule.js";

export default class RecreationAreaScheduleRepository {
  static async create(recreationAreaScheduleDTO) {
    return await RecreationAreaSchedule.create(recreationAreaScheduleDTO);
  }

  static async findAll() {
    return await RecreationAreaSchedule.findAll();
  }

  static async findById(id) {
    return await RecreationAreaSchedule.findByPk(id);
  }

  static async findByRecreationAreaId(recreation_area_id) {
    return await RecreationAreaSchedule.findAll({
      where: { recreation_area_id },
    });
  }

  static async update(id, updatedData) {
    const [affectedCount, [updatedRecreationAreaSchedule]] =
      await RecreationAreaSchedule.update(updatedData, {
        where: { id },
        returning: true,
      });
    if (affectedCount === 0) return null;
    return updatedRecreationAreaSchedule;
  }

  static async delete(id) {
    return await RecreationAreaSchedule.destroy({
      where: { id },
    });
  }
}
