import { Router } from "express";
import EstablishmentController from "../controllers/EstablishmentController.js";

const router = new Router();

router.post("/", EstablishmentController.create);
router.get("/", EstablishmentController.findAll);
router.get("/:id", EstablishmentController.findById);
router.delete("/:id", EstablishmentController.delete);

export { router as EstablishmentRoutes };
