import CourtScheduleRepository from "../../domain/repositories/CourtScheduleRepository.js";
import AppError from "../../shared/errors/AppError.js";

export default class CourtScheduleService {
  static async create(courtScheduleDTO) {
    const created = await CourtScheduleRepository.create(courtScheduleDTO);
    if (!created) {
      throw new AppError("Unable to create court schedule.", 400);
    }
    return created;
  }

  static async findAll() {
    const courtSchedules = await CourtScheduleRepository.findAll();
    if (courtSchedules.length === 0) {
      throw new AppError("No court schedules found", 404);
    }
    return courtSchedules;
  }

  static async findById(id) {
    const courtSchedule = await CourtScheduleRepository.findById(id);
    if (!courtSchedule) {
      throw new AppError(`Court schedule with id ${id} not found`, 404);
    }
    return courtSchedule;
  }

  static async findByCourtId(court_id) {
    const courts = await CourtScheduleRepository.findByCourtId(court_id);
    if (courts.length === 0) {
      throw new AppError("No court schedules found", 404);
    }
    return courts;
  }

  static async update(id, updatedData) {
    const updated = await CourtScheduleRepository.update(id, updatedData);
    if (!updated) {
      throw new AppError(`Unable to update court schedule with id ${id}.`, 400);
    }
    return updated;
  }

  static async delete(id) {
    const deletedCount = await CourtScheduleRepository.delete(id);
    if (deletedCount === 0) {
      throw new AppError(`Court schedule with id ${id} not found`, 404);
    }
    return { message: "Court schedule deleted successfully." };
  }
}
