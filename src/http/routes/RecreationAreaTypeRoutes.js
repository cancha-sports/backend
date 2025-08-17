import { Router } from "express";
import RecreationAreaTypeController from "../controllers/RecreationAreaTypeController.js";

const router = new Router();

router.post("/", RecreationAreaTypeController.create);
router.get("/", RecreationAreaTypeController.findAll);
router.get("/:id", RecreationAreaTypeController.findById);
router.patch("/:id", RecreationAreaTypeController.update);
router.delete("/:id", RecreationAreaTypeController.delete);

export { router as RecreationAreaTypeRoutes };
