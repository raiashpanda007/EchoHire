import { asyncHandler, response } from "../utils/utilts";
import prisma from "../db";
import { z as zod } from "zod";

const appointmentSchema = zod.object({
  candidateId: zod.number().min(1),
  jobId: zod.number().min(1),
  date: zod.string().min(1), // e.g., "2025-04-12"
  time: zod.string().min(1), // e.g., "14:30"
  status: zod.string().min(1),
});

const createAppointment = asyncHandler(async (req, res) => {
  const data = appointmentSchema.safeParse(req.body);

  if (!data.success) {
    return res
      .status(411)
      .json(new response(411, `Please provide correct required fields`, data.error));
  }

  const { candidateId, jobId, date, time, status } = data.data;

  
  const dateTimeString = `${date}T${time}`;
  const dateTime = new Date(dateTimeString);

  if (isNaN(dateTime.getTime())) {
    return res.status(400).json(new response(400, "Invalid date or time format", {}));
  }

  const appointment = await prisma.appointment.create({
    data: {
      candidateId,
      jobId,
      dateTime,
      status,
    },
  });

  if (!appointment) {
    return res.status(500).json(new response(500, "Error creating appointment", {}));
  }

  return res
    .status(201)
    .json(new response(201, "Appointment created successfully", appointment));
});


export { createAppointment };