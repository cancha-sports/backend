import UserService from "../../application/services/UserService.js";
import UserDTO from "../../application/dtos/UserDTO.js";
import { userSchema } from "../validations/UserValidator.js";
import { ZodError } from "zod";

export default class SportController {
  static async create(req, res) {
    try {
      const validatedData = userSchema.parse(req.body);
      const userDTO = new UserDTO(validatedData);
      const user = await UserService.create(userDTO);
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

  static async delete(req, res) {
    try {
      const result = await UserService.delete(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
