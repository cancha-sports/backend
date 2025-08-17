import Establishment from "../models/Establishment.js";

export default class EstablishmentRepository {
  static async create(establishmentDTO) {
    return await Establishment.create(establishmentDTO);
  }

  static async findAll() {
    return await Establishment.findAll();
  }

  static async findById(id) {
    return await Establishment.findByPk(id);
  }

  static async delete(id) {
    return await Establishment.destroy({
      where: { id },
    });
  }
}
