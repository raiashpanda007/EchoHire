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



const updateJobDescription = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { description } = req.body

    const job = await prisma.job.update({
        where: {
            id: Number(id)
        },
        data: {
            description
        }
    })
    if (!job) {
        return res.status(500).json(new response(500, "Error updating job", {}))
    }
    return res.status(200).json(new response(200, "Job updated successfully", job))
})

const getAllJobs = asyncHandler(async (req, res) => {    
    const jobs = await prisma.job.findMany()
    if (!jobs) {
        return res.status(500).json(new response(500, "Error fetching jobs", {}))
    }
    return res.status(200).json(new response(200, "Jobs fetched successfully", jobs))
})


export {
    createJob,
    getAllJobs,
    updateJobDescription
}