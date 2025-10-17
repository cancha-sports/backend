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

  static async findByOwnerId(owner_id) {
    return await Establishment.findAll({ where: { owner_id } });
  }

  static async update(id, updatedData) {
    const [affectedCount, [updatedEstablishment]] = await Establishment.update(
      updatedData,
      {
        where: { id },
        returning: true,
      }
    );
    if (affectedCount === 0) return null;
    return updatedEstablishment;
  }

  static async delete(id) {
    return await Establishment.destroy({
      where: { id },
    });
  }
}
