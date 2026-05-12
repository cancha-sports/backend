import AuthService from "../../application/services/AuthService.js";
import {
  LoginDTO,
  RegisterDTO,
  AuthResponseDTO,
} from "../../application/dtos/AuthDTO.js";
import {
  loginSchema,
  registerSchema,
  forgotPasswordSchema,
  validateResetCodeSchema,
  resetPasswordSchema,
} from "../validations/AuthValidator.js";
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

  static async forgotPassword(req, res) {
    try {
      const { email } = forgotPasswordSchema.parse(req.body);
      await AuthService.forgotPassword(email);
      return res.status(200).json({ message: "Code sent to your email." });
    } catch (error) {
      if (error instanceof ZodError) {
        return res
          .status(400)
          .json({ error: error.errors.map((e) => e.message) });
      }
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async validateResetCode(req, res) {
    try {
      const { email, code } = validateResetCodeSchema.parse(req.body);
      await AuthService.validateResetCode(email, code);
      return res.status(200).json({ valid: true });
    } catch (error) {
      if (error instanceof ZodError) {
        return res
          .status(400)
          .json({ error: error.errors.map((e) => e.message) });
      }
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async resetPassword(req, res) {
    try {
      const { email, code, newPassword } = resetPasswordSchema.parse(req.body);
      await AuthService.resetPassword(email, code, newPassword);
      return res
        .status(200)
        .json({ message: "Password successfully updated." });
    } catch (error) {
      if (error instanceof ZodError) {
        return res
          .status(400)
          .json({ error: error.errors.map((e) => e.message) });
      }
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  static async changePassword(req, res) {
    try {
      const { currentPassword, newPassword } = req.body;
      const userId = req.user.id;
      const result = await AuthService.changePassword(
        userId,
        currentPassword,
        newPassword,
      );
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
