import express from "express";
import { roomUtilization } from "../controllers/report.controller.js";

const router = express.Router();

router.get("/room-utilization", roomUtilization);

export default router;
