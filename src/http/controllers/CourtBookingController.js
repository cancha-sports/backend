import CourtBookingService from "../../application/services/CourtBookingService.js";
import {
  CreateCourtBookingDTO,
  UpdateCourtBookingDTO,
} from "../../application/dtos/CourtBookingDTO.js";
import {
  checkAvailabilitySchema,
  createCourtBookingSchema,
  updateCourtBookingSchema,
} from "../validations/CourtBookingValidator.js";
import { ZodError } from "zod";

export default class CourtBookingController {
  static async create(req, res) {
    try {
      const validatedData = createCourtBookingSchema.parse(req.body);
      const createCourtBookingDTO = new CreateCourtBookingDTO({
        ...validatedData,
        user_id: req.user.id,
      });
      const courtBooking = await CourtBookingService.create(
        createCourtBookingDTO
      );
      return res.status(201).json(courtBooking);
    } catch (error) {
      if (error instanceof ZodError) {
        return res
          .status(400)
          .json({ error: error.errors.map((e) => e.message) });
      }
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async findAll(req, res) {
    try {
      const courtBookings = await CourtBookingService.findAll();
      return res.status(200).json(courtBookings);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async findById(req, res) {
    try {
      const courtBooking = await CourtBookingService.findById(req.params.id);
      return res.status(200).json(courtBooking);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async findByCourtId(req, res) {
    try {
      const courtBookings = await CourtBookingService.findByCourtId(
        req.params.court_id
      );
      return res.status(200).json(courtBookings);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async findByUserId(req, res) {
    try {
      const courtBookings = await CourtBookingService.findByUserId(req.user.id);
      return res.status(200).json(courtBookings);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async findUpcomingByUserId(req, res) {
    try {
      const courtBookings = await CourtBookingService.findUpcomingByUserId(
        req.user.id
      );
      return res.status(200).json(courtBookings);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async findHistoryByUserId(req, res) {
    try {
      const courtBookings = await CourtBookingService.findHistoryByUserId(
        req.user.id
      );
      return res.status(200).json(courtBookings);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async checkAvailability(req, res) {
    try {
      const validatedData = checkAvailabilitySchema.parse(req.body);
      const { court_id, start_time, end_time } = validatedData;

      const availability = await CourtBookingService.checkAvailability(
        court_id,
        start_time,
        end_time
      );

      return res.status(200).json(availability);
    } catch (error) {
      if (error instanceof ZodError) {
        return res
          .status(400)
          .json({ error: error.errors.map((e) => e.message) });
      }
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const validatedData = updateCourtBookingSchema.parse(req.body);
      const updateCourtBookingDTO = new UpdateCourtBookingDTO(validatedData);
      const result = await CourtBookingService.update(
        req.params.id,
        updateCourtBookingDTO
      );
      return res.status(200).json(result);
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.errors
          .map((err) => err.message)
          .join(", ");
        return res.status(400).json({ error: formattedErrors });
      }
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const result = await CourtBookingService.delete(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
