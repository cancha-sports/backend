import CourtBooking from "../models/CourtBooking.js";
import { Op } from "sequelize";

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

  static async findByCourtId(court_id) {
    return await CourtBooking.findAll({ where: { court_id } });
  }

  static async findByUserId(user_id) {
    return await CourtBooking.findAll({
      where: { user_id },
      order: [["start_time", "ASC"]],
    });
  }

  static async findUpcomingByUserId(user_id) {
    return await CourtBooking.findAll({
      where: {
        user_id,
        end_time: {
          [Op.gt]: new Date(),
        },
      },
      order: [["start_time", "ASC"]],
    });
  }

  static async findHistoryByUserId(user_id) {
    return await CourtBooking.findAll({
      where: {
        user_id,
        end_time: {
          [Op.lte]: new Date(),
        },
      },
      order: [["start_time", "DESC"]],
    });
  }

  static async findConflictingBookings(court_id, start_time, end_time) {
    const { Op } = await import("sequelize");
    return await CourtBooking.findAll({
      where: {
        court_id,
        status: "confirmed",
        [Op.or]: [
          {
            start_time: { [Op.between]: [start_time, end_time] },
          },
          {
            end_time: { [Op.between]: [start_time, end_time] },
          },
          {
            [Op.and]: [
              { start_time: { [Op.lte]: start_time } },
              { end_time: { [Op.gte]: end_time } },
            ],
          },
        ],
      },
    });
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
