import { Router } from "express";
import { createJob,getAllJobs } from "../controllers/jobs.controllers";
const router = Router();

router.post("/",createJob)
router.get("/",getAllJobs)
export default router;