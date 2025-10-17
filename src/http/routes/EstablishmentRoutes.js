import { Router } from "express";
import EstablishmentController from "../controllers/EstablishmentController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = new Router();

router.post("/", authMiddleware, EstablishmentController.create);
router.get("/", authMiddleware, EstablishmentController.findAll);
router.get("/:id", authMiddleware, EstablishmentController.findById);
router.get(
  "/owner/:owner_id",
  authMiddleware,
  EstablishmentController.findByOwnerId
);
router.patch("/:id", authMiddleware, EstablishmentController.update);
router.delete("/:id", authMiddleware, EstablishmentController.delete);

export { router as EstablishmentRoutes };
