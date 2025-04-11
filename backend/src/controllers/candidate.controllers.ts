import {asyncHandler , response} from "../utils/utilts"
import prisma from "../db"
import {z as zod } from 'zod'



const candidateSchema = zod.object({
    name: zod.string().min(1),
    phone: zod.string().min(1),
    currentCtc: zod.string().min(1),
    expectedCtc: zod.string().min(1),
    noticePeriod: zod.string().min(1),
    experience: zod.string().min(1),
    
})

const createCandate = asyncHandler(async (req, res) => {
    const data = candidateSchema.safeParse(req.body)

    if (!data.success) {
        return res.status(411).json(new response(411, `Please provide correct required fields`,data.error))
    }

    const { name, phone, currentCtc, expectedCtc, noticePeriod, experience } = data.data

    const candidate = await prisma.candidate.create({
        data: {
            name,
            phone,
            currentCtc,
            expectedCtc,
            noticePeriod,
            experience
        }
    })
    if (!candidate) { 
        return res.status(500).json(new response(500, "Error creating candidate", {}))
    }
    return res.status(201).json(new response(201, "Candidate created successfully", candidate))
})

export {
    createCandate
}