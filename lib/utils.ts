import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateRandomId = (): string => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
  }
  return id;
};

export const CreateRoomSchema = z.object({
  id: z.string(),
  title: z.string(),
  pictures: z.string(),
  description: z.string().optional(),
  capacity: z.string(),
  location: z.string(),
  country: z.string(),
  catagory: z.string(),
  bedroom: z.string(),
  bed: z.string(),
  bath: z.string(),
  price: z.string(),
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
