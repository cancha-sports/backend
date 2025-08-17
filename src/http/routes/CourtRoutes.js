import { Router } from "express";
import CourtController from "../controllers/CourtController.js";

const router = new Router();

router.post("/", CourtController.create);
router.get("/", CourtController.findAll);
router.get("/:id", CourtController.findById);
router.patch("/:id", CourtController.update);
router.delete("/:id", CourtController.delete);

export { router as CourtRoutes };
