import AuthService from "../../application/services/AuthService.js";
import {
  LoginDTO,
  RegisterDTO,
  AuthResponseDTO,
} from "../../application/dtos/AuthDTO.js";
import { loginSchema, registerSchema } from "../validations/AuthValidator.js";
import { ZodError } from "zod";

export default class AuthController {
  static async register(req, res) {
    try {
      const validatedData = registerSchema.parse(req.body);
      const registerDTO = new RegisterDTO(validatedData);
      const authResponse = await AuthService.register(registerDTO);

      return res.status(201).json(authResponse);
    } catch (error) {
      if (error instanceof ZodError) {
        return res
          .status(400)
          .json({ error: error.errors.map((e) => e.message) });
      }
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async loginOwner(req, res) {
    try {
      const validatedData = loginSchema.parse(req.body);
      const loginDTO = new LoginDTO(validatedData);
      const authResponse = await AuthService.loginOwner(loginDTO);

      return res.status(200).json(authResponse);
    } catch (error) {
      if (error instanceof ZodError) {
        return res
          .status(400)
          .json({ error: error.errors.map((e) => e.message) });
      }
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async loginUser(req, res) {
    try {
      const validatedData = loginSchema.parse(req.body);
      const loginDTO = new LoginDTO(validatedData);
      const authResponse = await AuthService.loginUser(loginDTO);

      return res.status(200).json(authResponse);
    } catch (error) {
      if (error instanceof ZodError) {
        return res
          .status(400)
          .json({ error: error.errors.map((e) => e.message) });
      }
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async getMe(req, res) {
    try {
      const user = await AuthService.getCurrentUser(req.user.id);
      return res.status(200).json({ user });
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
