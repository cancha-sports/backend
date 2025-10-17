import CourtService from "../../application/services/CourtService.js";
import {
  CreateCourtDTO,
  UpdateCourtDTO,
} from "../../application/dtos/CourtDTO.js";
import {
  createCourtSchema,
  updateCourtSchema,
} from "../validations/CourtValidator.js";
import { ZodError } from "zod";

export default class CourtController {
  static async create(req, res) {
    try {
      const validatedData = createCourtSchema.parse(req.body);
      const courtDTO = new CreateCourtDTO(validatedData);
      const court = await CourtService.create(courtDTO);
      return res.status(201).json(court);
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
      const courts = await CourtService.findAll();
      return res.status(200).json(courts);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async findById(req, res) {
    try {
      const court = await CourtService.findById(req.params.id);
      return res.status(200).json(court);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async findByEstablishmentId(req, res) {
    try {
      const courts = await CourtService.findByEstablishmentId(
        req.params.establishment_id
      );
      return res.status(200).json(courts);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const validatedData = updateCourtSchema.parse(req.body);
      const courtDTO = new UpdateCourtDTO(validatedData);
      const result = await CourtService.update(req.params.id, courtDTO);
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
      const result = await CourtService.delete(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
