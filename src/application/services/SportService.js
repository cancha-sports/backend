import SportRepository from "../../domain/repositories/SportRepository.js";
import AppError from "../../shared/errors/AppError.js";

export default class SportService {
  static async create(sportDTO) {
    const created = await SportRepository.create(sportDTO);
    if (!created) {
      throw new AppError("Unable to create sport.", 400);
    }
    return created;
  }

  static async findAll() {
    const sports = await SportRepository.findAll();
    if (sports.length === 0) {
      throw new AppError("No sports found", 404);
    }
    return sports;
  }

  static async findById(id) {
    const sport = await SportRepository.findById(id);
    if (!sport) {
      throw new AppError(`Sport with id ${id} not found`, 404);
    }
    return sport;
  }

  static async update(id, updatedData) {
    const updated = await SportRepository.update(id, updatedData);
    if (!updated) {
      throw new AppError(`Unable to update sport with id ${id}.`, 400);
    }
    console.log("service");
    return updated;
  }

  static async delete(id) {
    const deletedCount = await SportRepository.delete(id);
    if (deletedCount === 0) {
      throw new AppError(`Sport with id ${id} not found`, 404);
    }
    return { message: "Sport deleted successfully." };
  }
}
