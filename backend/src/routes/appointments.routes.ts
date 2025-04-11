import { Router } from "express";
const router = Router();

import { createAppointment } from "../controllers/appointments.controllers";
router.post("/", createAppointment);

export default router;
