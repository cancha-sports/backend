import RecreationAreaBooking from "../models/RecreationAreaBooking.js";

export default class RecreationAreaBookingRepository {
  static async create(recreationAreaBookingDTO) {
    return await RecreationAreaBooking.create(recreationAreaBookingDTO);
  }

  static async findAll() {
    return await RecreationAreaBooking.findAll();
  }

  static async findById(id) {
    return await RecreationAreaBooking.findByPk(id);
  }

  static async findByRecreationAreaId(recreation_area_id) {
    return await RecreationAreaBooking.findAll({
      where: { recreation_area_id },
    });
  }

  static async update(id, updatedData) {
    const [affectedCount, [updatedRecreationAreaBooking]] =
      await RecreationAreaBooking.update(updatedData, {
        where: { id },
        returning: true,
      });
    if (affectedCount === 0) return null;
    return updatedRecreationAreaBooking;
  }

  static async delete(id) {
    return await RecreationAreaBooking.destroy({
      where: { id },
    });
  }
}
