import { Schema, models, model, Document } from "mongoose";

export interface IRoom extends Document {
  id: string;
  title: string;
  pictures: string[];
  description: string;
  capacity: string;
  location: string;
  country: string;
  catagory: Schema.Types.ObjectId;
  bedroom: string;
  bed: string;
  bath: string;
  price: string;
  freeWifi: boolean;
  parking: boolean;
  gym: boolean;
  pool: boolean;
  roomNumber: string;
}

const RoomSchema = new Schema({
  id: { type: String, require: true },
  title: { type: String, require: true },
  pictures: [{ type: String, require: true }],
  description: { type: String },
  capacity: { type: String },
  location: { type: String, require: true },
  country: { type: String, require: true },
  catagory: { type: Schema.Types.ObjectId, ref: "Catagory" },
  bedroom: { type: String },
  bed: { type: String },
  bath: { type: String },
  price: { type: Number, require: true },
  freeWifi: { type: Boolean },
  parking: { type: Boolean },
  gym: { type: Boolean },
  pool: { type: Boolean },
  roomNumber: { type: String, require: true },
});

const Room = models.Room || model("Room", RoomSchema);
export default Room;
