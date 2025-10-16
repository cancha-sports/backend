import { Router } from "express";
import UserController from "../controllers/UserController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = new Router();

router.post("/", authMiddleware, UserController.create);
router.get("/", authMiddleware, UserController.findAll);
router.get("/:id", authMiddleware, UserController.findById);
router.patch("/:id", authMiddleware, UserController.update);
router.delete("/:id", authMiddleware, UserController.delete);

export { router as UserRoutes };
