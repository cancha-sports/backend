import { Router } from "express";
import SportController from "../controllers/SportController.js";

const router = new Router();

router.post("/", SportController.create);
router.get("/", SportController.findAll);
router.get("/:id", SportController.findById);
router.patch("/:id", SportController.update);
router.delete("/:id", SportController.delete);

export { router as SportRoutes };
