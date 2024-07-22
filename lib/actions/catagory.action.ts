import Catagory from "@/database/catagory.model";
import { connectToDB } from "../mongoose";

export const CreateCatagory = async ({
  id,
  roomId,
  title,
}: {
  id: string;
  roomId: string;
  title: string;
}) => {
  try {
    connectToDB();

    await Catagory.create({
      id,
      roomId,
      title,
    });
  } catch (error) {
    console.log(error);
  }
};
