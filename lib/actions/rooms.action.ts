"use server";

import Room from "@/database/room.model";
import { connectToDB } from "../mongoose";
import { createRoomsType } from "@/types/type";
import { revalidatePath } from "next/cache";

export const createRooms = async ({
  id,
  title,
  picture,
  description,
  capacity,
  location,
  country,
  bedroom,
  bed,
  bath,
  price,
  freeWifi,
  parking,
  gym,
  pool,
  roomNumber,
  path,
}: createRoomsType) => {
  try {
    connectToDB();

    await Room.create({
      id,
      title,
      picture,
      description,
      capacity,
      location,
      country,
      bedroom,
      bed,
      bath,
      price,
      freeWifi,
      parking,
      gym,
      pool,
      roomNumber,
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
};
