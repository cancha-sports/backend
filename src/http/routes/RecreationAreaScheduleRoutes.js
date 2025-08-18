import { Router } from "express";
import RecreationAreaScheduleController from "../controllers/RecreationAreaScheduleController.js";

const router = new Router();

router.post("/", RecreationAreaScheduleController.create);
router.get("/", RecreationAreaScheduleController.findAll);
router.get("/:id", RecreationAreaScheduleController.findById);
router.patch("/:id", RecreationAreaScheduleController.update);
router.delete("/:id", RecreationAreaScheduleController.delete);

export { router as RecreationAreaScheduleRoutes };
