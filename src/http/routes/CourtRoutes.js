import { Router } from "express";
import CourtController from "../controllers/CourtController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = new Router();

router.post("/", authMiddleware, CourtController.create);
router.get("/", authMiddleware, CourtController.findAll);
router.get("/:id", authMiddleware, CourtController.findById);
router.patch("/:id", authMiddleware, CourtController.update);
router.delete("/:id", authMiddleware, CourtController.delete);

export { router as CourtRoutes };
