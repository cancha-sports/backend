import CourtRepository from "../../domain/repositories/CourtRepository.js";
import AppError from "../../shared/errors/AppError.js";

export default class CourtService {
  static async create(courtDTO) {
    const created = await CourtRepository.create(courtDTO);
    if (!created) {
      throw new AppError("Unable to create court.", 400);
    }
    return created;
  }

  static async findAll() {
    const courts = await CourtRepository.findAll();
    if (courts.length === 0) {
      throw new AppError("No courts found", 404);
    }
    return courts;
  }

  static async findById(id) {
    const court = await CourtRepository.findById(id);
    if (!court) {
      throw new AppError(`Court with id ${id} not found`, 404);
    }
    return court;
  }

  static async update(id, updatedData) {
    const updated = await CourtRepository.update(id, updatedData);
    if (!updated) {
      throw new AppError(`Unable to update court with id ${id}.`, 400);
    }
    return updated;
  }

  static async delete(id) {
    const deletedCount = await CourtRepository.delete(id);
    if (deletedCount === 0) {
      throw new AppError(`Court with id ${id} not found`, 404);
    }
    return { message: "Court deleted successfully." };
  }
}
