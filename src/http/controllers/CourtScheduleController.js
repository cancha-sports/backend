import CourtScheduleService from "../../application/services/CourtScheduleService.js";
import {
  CreateCourtScheduleDTO,
  UpdateCourtScheduleDTO,
} from "../../application/dtos/CourtScheduleDTO.js";
import {
  createCourtScheduleSchema,
  updateCourtScheduleSchema,
} from "../validations/CourtScheduleValidator.js";
import { ZodError } from "zod";

export default class CourtScheduleController {
  static async create(req, res) {
    try {
      const validatedData = createCourtScheduleSchema.parse(req.body);
      const createCourtScheduleDTO = new CreateCourtScheduleDTO(validatedData);
      const courtSchedule = await CourtScheduleService.create(
        createCourtScheduleDTO
      );
      return res.status(201).json(courtSchedule);
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
      const courtSchedules = await CourtScheduleService.findAll();
      return res.status(200).json(courtSchedules);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async findById(req, res) {
    try {
      const courtSchedule = await CourtScheduleService.findById(req.params.id);
      return res.status(200).json(courtSchedule);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async findByCourtId(req, res) {
    try {
      const courtSchedules = await CourtScheduleService.findByCourtId(
        req.params.court_id
      );
      return res.status(200).json(courtSchedules);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const validatedData = updateCourtScheduleSchema.parse(req.body);
      const updateCourtScheduleDTO = new UpdateCourtScheduleDTO(validatedData);
      const result = await CourtScheduleService.update(
        req.params.id,
        updateCourtScheduleDTO
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
      const result = await CourtScheduleService.delete(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
