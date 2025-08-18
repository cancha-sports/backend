import CourtBooking from "../models/CourtBooking.js";

export default class CourtBookingRepository {
  static async create(courtBookingDTO) {
    return await CourtBooking.create(courtBookingDTO);
  }

  static async findAll() {
    return await CourtBooking.findAll();
  }

  static async findById(id) {
    return await CourtBooking.findByPk(id);
  }

  static async update(id, updatedData) {
    const [affectedCount, [updatedCourtBooking]] = await CourtBooking.update(
      updatedData,
      {
        where: { id },
        returning: true,
      }
    );
    if (affectedCount === 0) return null;
    return updatedCourtBooking;
  }

  static async delete(id) {
    return await CourtBooking.destroy({
      where: { id },
    });
  }
}
