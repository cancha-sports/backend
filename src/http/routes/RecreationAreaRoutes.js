import { Router } from "express";
import RecreationAreaController from "../controllers/RecreationAreaController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = new Router();

router.post("/", authMiddleware, RecreationAreaController.create);
router.get("/", authMiddleware, RecreationAreaController.findAll);
router.get("/:id", authMiddleware, RecreationAreaController.findById);
router.get(
  "/establishment/:establishment_id",
  authMiddleware,
  RecreationAreaController.findByEstablishmentId
);
router.patch("/:id", authMiddleware, RecreationAreaController.update);
router.delete("/:id", authMiddleware, RecreationAreaController.delete);

export { router as RecreationAreaRoutes };
