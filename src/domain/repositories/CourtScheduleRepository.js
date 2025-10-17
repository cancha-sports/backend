import CourtSchedule from "../models/CourtSchedule.js";

export default class CourtScheduleRepository {
  static async create(courtScheduleDTO) {
    return await CourtSchedule.create(courtScheduleDTO);
  }

  static async findAll() {
    return await CourtSchedule.findAll();
  }

  static async findById(id) {
    return await CourtSchedule.findByPk(id);
  }

  static async findByCourtId(court_id) {
    return await CourtSchedule.findAll({ where: { court_id } });
  }

  static async update(id, updatedData) {
    const [affectedCount, [updatedCourtSchedule]] = await CourtSchedule.update(
      updatedData,
      {
        where: { id },
        returning: true,
      }
    );
    if (affectedCount === 0) return null;
    return updatedCourtSchedule;
  }

  static async delete(id) {
    return await CourtSchedule.destroy({
      where: { id },
    });
  }
}
