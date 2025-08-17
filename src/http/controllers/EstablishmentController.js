import EstablishmentService from "../../application/services/EstablishmentService.js";
import EstablishmentDTO from "../../application/dtos/EstablishmentDTO.js";
import { establishmentSchema } from "../validations/EstablishmentValidator.js";
import { ZodError } from "zod";

export default class EstablishmentController {
  static async create(req, res) {
    try {
      const validatedData = establishmentSchema.parse(req.body);
      const establishmentDTO = new EstablishmentDTO(validatedData);
      const establishment = await EstablishmentService.create(establishmentDTO);
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

  static async delete(req, res) {
    try {
      const result = await EstablishmentService.delete(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
