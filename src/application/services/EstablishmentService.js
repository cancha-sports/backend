import EstablishmentRepository from "../../domain/repositories/EstablishmentRepository.js";
import AppError from "../../shared/errors/AppError.js";

export default class EstablishmentService {
  static async create(establishmentDTO) {
    const created = await EstablishmentRepository.create(establishmentDTO);
    if (!created) {
      throw new AppError("Unable to create establishment.", 400);
    }
    return created;
  }

  static async findAll() {
    const establishments = await EstablishmentRepository.findAll();
    if (establishments.length === 0) {
      throw new AppError("No establishments found", 404);
    }
    return establishments;
  }

  static async findById(id) {
    const establishment = await EstablishmentRepository.findById(id);
    if (!establishment) {
      throw new AppError(`Establishment with id ${id} not found`, 404);
    }
    return establishment;
  }

  static async findByOwnerId(owner_id) {
    const courts = await EstablishmentRepository.findByOwnerId(owner_id);
    if (courts.length === 0) {
      throw new AppError("No establishments found", 404);
    }
    return courts;
  }

  static async update(id, updatedData) {
    const updated = await EstablishmentRepository.update(id, updatedData);
    if (!updated) {
      throw new AppError(`Unable to update establishment with id ${id}.`, 400);
    }
    return updated;
  }

  static async delete(id) {
    const deletedCount = await EstablishmentRepository.delete(id);
    if (deletedCount === 0) {
      throw new AppError(`Establishment with id ${id} not found`, 404);
    }
    return { message: "Establishment deleted successfully." };
  }
}
