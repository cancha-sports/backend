import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = new Router();

router.post("/", UserController.create);
router.get("/", UserController.findAll);
router.get("/:id", UserController.findById);
router.delete("/:id", UserController.delete);

export { router as UserRoutes };
