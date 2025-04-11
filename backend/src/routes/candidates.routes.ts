import {Router} from "express";
import { createCandate } from "../controllers/candidate.controllers";


const router = Router();

router.post("/", createCandate);

export default router;
