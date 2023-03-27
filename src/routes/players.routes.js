import { Router } from "express";
import { getPlayers } from "../controllers/playersController.js";

const router = Router();

router.get("/", getPlayers);

// router.post("/", createPlayer);

export default router;
