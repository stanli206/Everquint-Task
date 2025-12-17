import express from "express";
import { createRoom, listRooms } from "../controllers/room.controller.js";

const router = express.Router();

router.post("/", createRoom);
router.get("/", listRooms);

export default router;
