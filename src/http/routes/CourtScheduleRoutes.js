import { Router } from "express";
import CourtScheduleController from "../controllers/CourtScheduleController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = new Router();

router.post("/", authMiddleware, CourtScheduleController.create);
router.get("/", authMiddleware, CourtScheduleController.findAll);
router.get("/:id", authMiddleware, CourtScheduleController.findById);
router.patch("/:id", authMiddleware, CourtScheduleController.update);
router.delete("/:id", authMiddleware, CourtScheduleController.delete);

export { router as CourtScheduleRoutes };
