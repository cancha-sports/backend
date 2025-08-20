import EstablishmentService from "../../application/services/EstablishmentService.js";
import {
  CreateEstablishmentDTO,
  UpdateEstablishmentDTO,
} from "../../application/dtos/EstablishmentDTO.js";
import {
  createEstablishmentSchema,
  updateEstablishmentSchema,
} from "../validations/EstablishmentValidator.js";
import { ZodError } from "zod";

export default class EstablishmentController {
  static async create(req, res) {
    try {
      const validatedData = createEstablishmentSchema.parse(req.body);
      const createEstablishmentDTO = new CreateEstablishmentDTO(validatedData);
      const establishment = await EstablishmentService.create(
        createEstablishmentDTO
      );
      return res.status(201).json(establishment);
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
      const establishments = await EstablishmentService.findAll();
      return res.status(200).json(establishments);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async findById(req, res) {
    try {
      const establishment = await EstablishmentService.findById(req.params.id);
      return res.status(200).json(establishment);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const validatedData = updateEstablishmentSchema.parse(req.body);
      const updateEstablishmentDTO = new UpdateEstablishmentDTO(validatedData);
      const result = await EstablishmentService.update(
        req.params.id,
        updateEstablishmentDTO
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
      const result = await EstablishmentService.delete(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
