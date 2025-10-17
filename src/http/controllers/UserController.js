import UserService from "../../application/services/UserService.js";
import {
  CreateUserDTO,
  UpdateUserDTO,
} from "../../application/dtos/UserDTO.js";
import {
  createUserSchema,
  updateUserSchema,
} from "../validations/UserValidator.js";
import { ZodError } from "zod";

export default class UserController {
  static async create(req, res) {
    try {
      const validatedData = createUserSchema.parse(req.body);
      const createUserDTO = new CreateUserDTO(validatedData);
      const user = await UserService.create(createUserDTO);
      return res.status(201).json(user);
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
      const users = await UserService.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async findById(req, res) {
    try {
      const user = await UserService.findById(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const validatedData = updateUserSchema.parse(req.body);
      const updateUserDTO = new UpdateUserDTO(validatedData);
      const result = await UserService.update(req.params.id, updateUserDTO);
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
      const result = await UserService.delete(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
