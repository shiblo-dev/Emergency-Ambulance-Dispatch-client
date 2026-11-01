import { z } from "zod";

export const hospitalZodSchema = z
  .object({
    name: z
      .string({ message: "Hospital name is required" })
      .trim()
      .min(1, "Hospital name is required"),
    address: z
      .string({ message: "Address is required" })
      .trim()
      .min(1, "Address is required"),
    city: z
      .string({ message: "City is required" })
      .trim()
      .min(1, "City is required"),
    latitude: z
      .number({ message: "Latitude must be a number" })
      .min(-90, "Latitude must be between -90 and 90")
      .max(90, "Latitude must be between -90 and 90")
      .optional(),
    longitude: z
      .number({ message: "Longitude must be a number" })
      .min(-180, "Longitude must be between -180 and 180")
      .max(180, "Longitude must be between -180 and 180")
      .optional(),
    phone: z
      .string({ message: "Phone number is required" })
      .trim()
      .min(6, "Phone number must be at least 6 characters"),
    totalBeds: z
      .number({ message: "Total beds is required" })
      .int("Total beds must be a whole number")
      .nonnegative("Total beds cannot be negative"),
    availableBeds: z
      .number({ message: "Available beds is required" })
      .int("Available beds must be a whole number")
      .nonnegative("Available beds cannot be negative"),
  })
  .refine((data) => data.availableBeds <= data.totalBeds, {
    message: "Available beds cannot exceed total beds",
    path: ["availableBeds"],
  });