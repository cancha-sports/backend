import { Router } from "express";
import CourtScheduleController from "../controllers/CourtScheduleController.js";

const router = new Router();

router.post("/", CourtScheduleController.create);
router.get("/", CourtScheduleController.findAll);
router.get("/:id", CourtScheduleController.findById);
router.patch("/:id", CourtScheduleController.update);
router.delete("/:id", CourtScheduleController.delete);

export { router as CourtScheduleRoutes };
