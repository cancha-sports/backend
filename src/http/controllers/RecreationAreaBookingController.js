import RecreationAreaBookingService from "../../application/services/RecreationAreaBookingService.js";
import {
  CreateRecreationAreaBookingDTO,
  UpdateRecreationAreaBookingDTO,
} from "../../application/dtos/RecreationAreaBookingDTO.js";
import {
  createRecreationAreaBookingSchema,
  updateRecreationAreaBookingSchema,
} from "../validations/RecreationAreaBookingValidator.js";
import { ZodError } from "zod";

export default class RecreationAreaBookingController {
  static async create(req, res) {
    try {
      const validatedData = createRecreationAreaBookingSchema.parse(req.body);
      const createRecreationAreaBookingDTO = new CreateRecreationAreaBookingDTO(
        validatedData
      );
      const recreationAreaBooking = await RecreationAreaBookingService.create(
        createRecreationAreaBookingDTO
      );
      return res.status(201).json(recreationAreaBooking);
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
      const recreationAreaBookings =
        await RecreationAreaBookingService.findAll();
      return res.status(200).json(recreationAreaBookings);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async findById(req, res) {
    try {
      const recreationAreaBooking = await RecreationAreaBookingService.findById(
        req.params.id
      );
      return res.status(200).json(recreationAreaBooking);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const validatedData = updateRecreationAreaBookingSchema.parse(req.body);
      const updateRecreationAreaBookingDTO = new UpdateRecreationAreaBookingDTO(
        validatedData
      );
      const result = await RecreationAreaBookingService.update(
        req.params.id,
        updateRecreationAreaBookingDTO
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
      const result = await RecreationAreaBookingService.delete(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
