import { Router } from "express";
import SportController from "../controllers/SportController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = new Router();

router.post("/", authMiddleware, SportController.create);
router.get("/", authMiddleware, SportController.findAll);
router.get("/:id", authMiddleware, SportController.findById);
router.patch("/:id", authMiddleware, SportController.update);
router.delete("/:id", authMiddleware, SportController.delete);

export { router as SportRoutes };
