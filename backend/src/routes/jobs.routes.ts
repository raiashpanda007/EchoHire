import { Router } from "express";
import { createJob,getAllJobs, updateJobDescription } from "../controllers/jobs.controllers";
const router = Router();

router.post("/",createJob)
router.get("/",getAllJobs)
router.put("/:id",updateJobDescription)

export default router;