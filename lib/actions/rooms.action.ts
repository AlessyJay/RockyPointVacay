"use server";

import { connectToDB } from "../mongoose";
import { createRoomsType } from "@/types/type";

export const createRooms = async () => {
  try {
    connectToDB();
  } catch (error) {
    console.log(error);
  }
};
