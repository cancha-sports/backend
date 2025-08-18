import { Router } from "express";
import CourtBookingController from "../controllers/CourtBookingController.js";

const router = new Router();

router.post("/", CourtBookingController.create);
router.get("/", CourtBookingController.findAll);
router.get("/:id", CourtBookingController.findById);
router.patch("/:id", CourtBookingController.update);
router.delete("/:id", CourtBookingController.delete);

export { router as CourtBookingRoutes };
