import SportService from "../../application/services/SportService.js";
import SportDTO from "../../application/dtos/SportDTO.js";
import { sportSchema } from "../validations/SportValidator.js";
import { ZodError } from "zod";

export default class SportController {
  static async create(req, res) {
    try {
      const validatedData = sportSchema.parse(req.body);
      const sportDTO = new SportDTO(validatedData);
      const sport = await SportService.create(sportDTO);
      return res.status(201).json(sport);
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
      const sports = await SportService.findAll();
      return res.status(200).json(sports);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async findById(req, res) {
    try {
      const sport = await SportService.findById(req.params.id);
      return res.status(200).json(sport);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const validatedData = sportSchema.parse(req.body);
      const sportDTO = new SportDTO(validatedData);
      const result = await SportService.update(req.params.id, sportDTO);
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
      const result = await SportService.delete(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
