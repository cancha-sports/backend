import { Router } from "express";
import RecreationAreaTypeController from "../controllers/RecreationAreaTypeController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = new Router();

router.post("/", authMiddleware, RecreationAreaTypeController.create);
router.get("/", authMiddleware, RecreationAreaTypeController.findAll);
router.get("/:id", authMiddleware, RecreationAreaTypeController.findById);
router.patch("/:id", authMiddleware, RecreationAreaTypeController.update);
router.delete("/:id", authMiddleware, RecreationAreaTypeController.delete);

export { router as RecreationAreaTypeRoutes };
