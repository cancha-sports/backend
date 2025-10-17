import RecreationAreaScheduleService from "../../application/services/RecreationAreaScheduleService.js";
import {
  CreateRecreationAreaScheduleDTO,
  UpdateRecreationAreaScheduleDTO,
} from "../../application/dtos/RecreationAreaScheduleDTO.js";
import {
  createRecreationAreaScheduleSchema,
  updateRecreationAreaScheduleSchema,
} from "../validations/RecreationAreaScheduleValidator.js";
import { ZodError } from "zod";

export default class RecreationAreaScheduleController {
  static async create(req, res) {
    try {
      const validatedData = createRecreationAreaScheduleSchema.parse(req.body);
      const createRecreationAreaScheduleDTO =
        new CreateRecreationAreaScheduleDTO(validatedData);
      const recreationAreaSchedule = await RecreationAreaScheduleService.create(
        createRecreationAreaScheduleDTO
      );
      return res.status(201).json(recreationAreaSchedule);
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
      const recreationAreaSchedules =
        await RecreationAreaScheduleService.findAll();
      return res.status(200).json(recreationAreaSchedules);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async findById(req, res) {
    try {
      const recreationAreaSchedule =
        await RecreationAreaScheduleService.findById(req.params.id);
      return res.status(200).json(recreationAreaSchedule);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async findByRecreationAreaId(req, res) {
    try {
      const recreationAreaSchedules =
        await RecreationAreaScheduleService.findByRecreationAreaId(
          req.params.recreation_area_id
        );
      return res.status(200).json(recreationAreaSchedules);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const validatedData = updateRecreationAreaScheduleSchema.parse(req.body);
      const updateRecreationAreaScheduleDTO =
        new UpdateRecreationAreaScheduleDTO(validatedData);
      const result = await RecreationAreaScheduleService.update(
        req.params.id,
        updateRecreationAreaScheduleDTO
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
      const result = await RecreationAreaScheduleService.delete(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
