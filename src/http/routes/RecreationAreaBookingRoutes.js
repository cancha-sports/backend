import { Router } from "express";
import RecreationAreaBookingController from "../controllers/RecreationAreaBookingController.js";

const router = new Router();

router.post("/", RecreationAreaBookingController.create);
router.get("/", RecreationAreaBookingController.findAll);
router.get("/:id", RecreationAreaBookingController.findById);
router.patch("/:id", RecreationAreaBookingController.update);
router.delete("/:id", RecreationAreaBookingController.delete);

export { router as RecreationAreaBookingRoutes };
