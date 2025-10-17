import { Router } from "express";
import RecreationAreaScheduleController from "../controllers/RecreationAreaScheduleController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = new Router();

router.post("/", authMiddleware, RecreationAreaScheduleController.create);
router.get("/", authMiddleware, RecreationAreaScheduleController.findAll);
router.get("/:id", authMiddleware, RecreationAreaScheduleController.findById);
router.get(
  "/recreation-area/:recreation_area_id",
  authMiddleware,
  RecreationAreaScheduleController.findByRecreationAreaId
);
router.patch("/:id", authMiddleware, RecreationAreaScheduleController.update);
router.delete("/:id", authMiddleware, RecreationAreaScheduleController.delete);

export { router as RecreationAreaScheduleRoutes };
