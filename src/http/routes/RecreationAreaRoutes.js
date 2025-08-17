import { Router } from "express";
import RecreationAreaController from "../controllers/RecreationAreaController.js";

const router = new Router();

router.post("/", RecreationAreaController.create);
router.get("/", RecreationAreaController.findAll);
router.get("/:id", RecreationAreaController.findById);
router.patch("/:id", RecreationAreaController.update);
router.delete("/:id", RecreationAreaController.delete);

export { router as RecreationAreaRoutes };
