import RecreationAreaBookingRepository from "../../domain/repositories/RecreationAreaBookingRepository.js";
import AppError from "../../shared/errors/AppError.js";

export default class RecreationAreaBookingService {
  static async create(recreationAreaBookingDTO) {
    const created = await RecreationAreaBookingRepository.create(
      recreationAreaBookingDTO
    );
    if (!created) {
      throw new AppError("Unable to create recreation area booking.", 400);
    }
    return created;
  }

  static async findAll() {
    const recreationAreaBookings =
      await RecreationAreaBookingRepository.findAll();
    if (recreationAreaBookings.length === 0) {
      throw new AppError("No recreation area bookings found", 404);
    }
    return recreationAreaBookings;
  }

  static async findById(id) {
    const recreationAreaBooking =
      await RecreationAreaBookingRepository.findById(id);
    if (!recreationAreaBooking) {
      throw new AppError(
        `Recreation area booking with id ${id} not found`,
        404
      );
    }
    return recreationAreaBooking;
  }

  static async findByRecreationAreaId(recreation_area_id) {
    const recreationAreaBookings =
      await RecreationAreaBookingRepository.findByRecreationAreaId(
        recreation_area_id
      );
    if (recreationAreaBookings.length === 0) {
      throw new AppError("No recreation area bookings found", 404);
    }
    return recreationAreaBookings;
  }

  static async update(id, updatedData) {
    const updated = await RecreationAreaBookingRepository.update(
      id,
      updatedData
    );
    if (!updated) {
      throw new AppError(
        `Unable to update recreation area booking with id ${id}.`,
        400
      );
    }
    return updated;
  }

  static async delete(id) {
    const deletedCount = await RecreationAreaBookingRepository.delete(id);
    if (deletedCount === 0) {
      throw new AppError(
        `Recreation area booking with id ${id} not found`,
        404
      );
    }
    return { message: "Recreation area booking deleted successfully." };
  }
}
