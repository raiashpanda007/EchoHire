import {asyncHandler,response} from "../utils/utilts"
import {z as zod } from "zod"
import prisma from "../db"

const jobSchema = zod.object({
    title: zod.string().min(1),
    description: zod.string().min(1),
    requirements: zod.string().min(1),
    company: zod.string().min(1),
})



const createJob = asyncHandler(async (req, res) => { 
    
    const data = jobSchema.safeParse(req.body)

    if (!data.success) {
        return res.status(411).json(new response(411, `Please provide correct required fields`,data.error))
    }

    const { title, description, requirements, company } = data.data
    
    const job = await prisma.job.create({
        data: {
            title,
            description,
            requirements,
            company
        }
    })
    if (!job) { 
        return res.status(500).json(new response(500, "Error creating job", {}))
    }
    return res.status(201).json(new response(201, "Job created successfully", job))
    
    
})

const getAllJobs = asyncHandler(async (req, res) => {    
})


export {
    createJob,
    getAllJobs
}