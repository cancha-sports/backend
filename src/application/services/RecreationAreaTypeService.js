import RecreationAreaTypeRepository from "../../domain/repositories/RecreationAreaTypeRepository.js";
import AppError from "../../shared/errors/AppError.js";

export default class RecreationAreaTypeService {
  static async create(recreationAreaTypeDTO) {
    const created = await RecreationAreaTypeRepository.create(
      recreationAreaTypeDTO
    );
    if (!created) {
      throw new AppError("Unable to create recreation area type.", 400);
    }
    return created;
  }

  static async findAll() {
    const recreationAreaTypes = await RecreationAreaTypeRepository.findAll();
    if (recreationAreaTypes.length === 0) {
      throw new AppError("No recreation area types found", 404);
    }
    return recreationAreaTypes;
  }

  static async findById(id) {
    const recreationAreaType = await RecreationAreaTypeRepository.findById(id);
    if (!recreationAreaType) {
      throw new AppError(`Recreation area type with id ${id} not found`, 404);
    }
    return recreationAreaType;
  }

  static async update(id, updatedData) {
    const updated = await RecreationAreaTypeRepository.update(id, updatedData);
    if (!updated) {
      throw new AppError(
        `Unable to update recreation area type with id ${id}.`,
        400
      );
    }
    return updated;
  }

  static async delete(id) {
    const deletedCount = await RecreationAreaTypeRepository.delete(id);
    if (deletedCount === 0) {
      throw new AppError(`Recreation area type with id ${id} not found`, 404);
    }
    return { message: "Recreation area type deleted successfully." };
  }
}
