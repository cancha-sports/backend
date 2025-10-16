import { Router } from "express";
import CourtBookingController from "../controllers/CourtBookingController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = new Router();

router.post("/", authMiddleware, CourtBookingController.create);
router.get("/", authMiddleware, CourtBookingController.findAll);
router.get("/:id", authMiddleware, CourtBookingController.findById);
router.patch("/:id", authMiddleware, CourtBookingController.update);
router.delete("/:id", authMiddleware, CourtBookingController.delete);

export { router as CourtBookingRoutes };
