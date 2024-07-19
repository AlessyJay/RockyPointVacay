import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CreateRoomSchema = z.object({
  id: z.string(),
  title: z.string(),
  pictures: z.string(),
  description: z.string().min(20),
  capacity: z.string(),
  location: z.string(),
  country: z.string(),
  catagory: z.string(),
  bedroom: z.string(),
  bed: z.string(),
  bath: z.string(),
  price: z.number(),
  freeWifi: z.boolean(),
  parking: z.boolean(),
  gym: z.boolean(),
  pool: z.boolean(),
  roomNumber: z.string(),
});

export const CreateCatagorySchema = z.object({
  id: z.string(),
  roomId: z.string(),
  title: z.string(),
});
