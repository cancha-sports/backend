import RecreationAreaTypeService from "../../application/services/RecreationAreaTypeService.js";
import RecreationAreaTypeDTO from "../../application/dtos/RecreationAreaTypeDTO.js";
import { recreationAreaTypeSchema } from "../validations/RecreationAreaTypeValidator.js";
import { ZodError } from "zod";

export default class RecreationAreaTypeController {
  static async create(req, res) {
    try {
      const validatedData = recreationAreaTypeSchema.parse(req.body);
      const recreationAreaTypeDTO = new RecreationAreaTypeDTO(validatedData);
      const recreationAreaType = await RecreationAreaTypeService.create(
        recreationAreaTypeDTO
      );
      return res.status(201).json(recreationAreaType);
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
      const recreationAreaTypes = await RecreationAreaTypeService.findAll();
      return res.status(200).json(recreationAreaTypes);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async findById(req, res) {
    try {
      const recreationAreaType = await RecreationAreaTypeService.findById(
        req.params.id
      );
      return res.status(200).json(recreationAreaType);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const validatedData = recreationAreaTypeSchema.parse(req.body);
      const recreationAreaTypeDTO = new RecreationAreaTypeDTO(validatedData);
      const result = await RecreationAreaTypeService.update(
        req.params.id,
        recreationAreaTypeDTO
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
      const result = await RecreationAreaTypeService.delete(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
