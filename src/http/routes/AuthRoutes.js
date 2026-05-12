import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = new Router();

router.post("/register", AuthController.register);
router.post("/login-owner", AuthController.loginOwner);
router.post("/login-user", AuthController.loginUser);
router.get("/me", authMiddleware, AuthController.getMe);
router.post("/forgot-password", AuthController.forgotPassword);
router.post("/validate-reset-code", AuthController.validateResetCode);
router.post("/reset-password", AuthController.resetPassword);

export { router as AuthRoutes };
