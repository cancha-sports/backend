import RecreationAreaScheduleRepository from "../../domain/repositories/RecreationAreaScheduleRepository.js";
import AppError from "../../shared/errors/AppError.js";

export default class RecreationAreaScheduleService {
  static async create(recreationAreaScheduleDTO) {
    const created = await RecreationAreaScheduleRepository.create(
      recreationAreaScheduleDTO
    );
    if (!created) {
      throw new AppError("Unable to create recreation area schedule.", 400);
    }
    return created;
  }

  static async findAll() {
    const recreationAreaSchedules =
      await RecreationAreaScheduleRepository.findAll();
    if (recreationAreaSchedules.length === 0) {
      throw new AppError("No recreation area schedules found", 404);
    }
    return recreationAreaSchedules;
  }

  static async findById(id) {
    const recreationAreaSchedule =
      await RecreationAreaScheduleRepository.findById(id);
    if (!recreationAreaSchedule) {
      throw new AppError(
        `Recreation area schedule with id ${id} not found`,
        404
      );
    }
    return recreationAreaSchedule;
  }

  static async findByRecreationAreaId(recreation_area_id) {
    const recreationAreaSchedules =
      await RecreationAreaScheduleRepository.findByRecreationAreaId(
        recreation_area_id
      );
    if (recreationAreaSchedules.length === 0) {
      throw new AppError("No recreation area schedules found", 404);
    }
    return recreationAreaSchedules;
  }

  static async update(id, updatedData) {
    const updated = await RecreationAreaScheduleRepository.update(
      id,
      updatedData
    );
    if (!updated) {
      throw new AppError(
        `Unable to update recreation area schedule with id ${id}.`,
        400
      );
    }
    return updated;
  }

  static async delete(id) {
    const deletedCount = await RecreationAreaScheduleRepository.delete(id);
    if (deletedCount === 0) {
      throw new AppError(
        `Recreation area schedule with id ${id} not found`,
        404
      );
    }
    return { message: "Recreation area schedule deleted successfully." };
  }
}
