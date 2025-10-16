import { Router } from "express";
import RecreationAreaBookingController from "../controllers/RecreationAreaBookingController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = new Router();

router.post("/", authMiddleware, RecreationAreaBookingController.create);
router.get("/", authMiddleware, RecreationAreaBookingController.findAll);
router.get("/:id", authMiddleware, RecreationAreaBookingController.findById);
router.patch("/:id", authMiddleware, RecreationAreaBookingController.update);
router.delete("/:id", authMiddleware, RecreationAreaBookingController.delete);

export { router as RecreationAreaBookingRoutes };
