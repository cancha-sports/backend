import RecreationAreaRepository from "../../domain/repositories/RecreationAreaRepository.js";
import AppError from "../../shared/errors/AppError.js";

export default class RecreationAreaService {
  static async create(recreationAreaDTO) {
    const created = await RecreationAreaRepository.create(recreationAreaDTO);
    if (!created) {
      throw new AppError("Unable to create recreation area.", 400);
    }
    return created;
  }

  static async findAll() {
    const recreationAreas = await RecreationAreaRepository.findAll();
    if (recreationAreas.length === 0) {
      throw new AppError("No recreation areas found", 404);
    }
    return recreationAreas;
  }

  static async findById(id) {
    const recreationArea = await RecreationAreaRepository.findById(id);
    if (!recreationArea) {
      throw new AppError(`Recreation area with id ${id} not found`, 404);
    }
    return recreationArea;
  }

  static async findByEstablishmentId(establishment_id) {
    const recreationAreas =
      await RecreationAreaRepository.findByEstablishmentId(establishment_id);
    if (recreationAreas.length === 0) {
      throw new AppError("No recreation areas found", 404);
    }
    return recreationAreas;
  }

  static async update(id, updatedData) {
    const updated = await RecreationAreaRepository.update(id, updatedData);
    if (!updated) {
      throw new AppError(
        `Unable to update recreation area with id ${id}.`,
        400
      );
    }
    return updated;
  }

  static async delete(id) {
    const deletedCount = await RecreationAreaRepository.delete(id);
    if (deletedCount === 0) {
      throw new AppError(`Recreation area with id ${id} not found`, 404);
    }
    return { message: "Recreation area deleted successfully." };
  }
}
