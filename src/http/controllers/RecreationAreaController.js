import RecreationAreaService from "../../application/services/RecreationAreaService.js";
import {
  CreateRecreationAreaDTO,
  UpdateRecreationAreaDTO,
} from "../../application/dtos/RecreationAreaDTO.js";
import {
  createRecreationAreaSchema,
  updateRecreationAreaSchema,
} from "../validations/RecreationAreaValidator.js";
import { ZodError } from "zod";

export default class RecreationAreaController {
  static async create(req, res) {
    try {
      const validatedData = createRecreationAreaSchema.parse(req.body);
      const createRecreationAreaDTO = new CreateRecreationAreaDTO(
        validatedData
      );
      const recreationArea = await RecreationAreaService.create(
        createRecreationAreaDTO
      );
      return res.status(201).json(recreationArea);
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
      const recreationAreas = await RecreationAreaService.findAll();
      return res.status(200).json(recreationAreas);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async findById(req, res) {
    try {
      const recreationArea = await RecreationAreaService.findById(
        req.params.id
      );
      return res.status(200).json(recreationArea);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const validatedData = updateRecreationAreaSchema.parse(req.body);
      const updateRecreationAreaDTO = new UpdateRecreationAreaDTO(
        validatedData
      );
      const result = await RecreationAreaService.update(
        req.params.id,
        updateRecreationAreaDTO
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
      const result = await RecreationAreaService.delete(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
