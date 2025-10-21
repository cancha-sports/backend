import CourtBookingRepository from "../../domain/repositories/CourtBookingRepository.js";
import AppError from "../../shared/errors/AppError.js";

export default class CourtBookingService {
  static async create(courtBookingDTO) {
    const created = await CourtBookingRepository.create(courtBookingDTO);
    if (!created) {
      throw new AppError("Unable to create court booking.", 400);
    }
    return created;
  }

  static async findAll() {
    const courtBookings = await CourtBookingRepository.findAll();
    if (courtBookings.length === 0) {
      throw new AppError("No court bookings found", 404);
    }
    return courtBookings;
  }

  static async findById(id) {
    const courtBooking = await CourtBookingRepository.findById(id);
    if (!courtBooking) {
      throw new AppError(`Court booking with id ${id} not found`, 404);
    }
    return courtBooking;
  }

  static async findByCourtId(court_id) {
    const courts = await CourtBookingRepository.findByCourtId(court_id);
    if (courts.length === 0) {
      throw new AppError("No court bookings found", 404);
    }
    return courts;
  }

  static async findByUserId(user_id) {
    const courtBookings = await CourtBookingRepository.findByUserId(user_id);
    if (courtBookings.length === 0) {
      throw new AppError("No court bookings found", 404);
    }
    return courtBookings;
  }

  static async findUpcomingByUserId(user_id) {
    const courtBookings = await CourtBookingRepository.findUpcomingByUserId(
      user_id
    );
    if (courtBookings.length === 0) {
      throw new AppError("No upcoming court bookings found", 404);
    }
    return courtBookings;
  }

  static async findHistoryByUserId(user_id) {
    const courtBookings = await CourtBookingRepository.findHistoryByUserId(
      user_id
    );
    if (courtBookings.length === 0) {
      throw new AppError("No court bookings history found", 404);
    }
    return courtBookings;
  }

  static async checkAvailability(court_id, start_time, end_time) {
    const conflictingBookings =
      await CourtBookingRepository.findConflictingBookings(
        court_id,
        start_time,
        end_time
      );

    return {
      available: conflictingBookings.length === 0,
      conflictingBookings: conflictingBookings,
    };
  }

  static async update(id, updatedData) {
    const updated = await CourtBookingRepository.update(id, updatedData);
    if (!updated) {
      throw new AppError(`Unable to update court booking with id ${id}.`, 400);
    }
    return updated;
  }

  static async delete(id) {
    const deletedCount = await CourtBookingRepository.delete(id);
    if (deletedCount === 0) {
      throw new AppError(`Court booking with id ${id} not found`, 404);
    }
    return { message: "Court booking deleted successfully." };
  }
}
