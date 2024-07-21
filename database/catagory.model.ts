import { Schema, models, model, Document } from "mongoose";

export interface ICatagory extends Document {
  id: string;
  roomId: Schema.Types.ObjectId[];
  title: string;
}

const CatagorySchema = new Schema({
  id: { type: String, require: true },
  roomId: [{ type: Schema.Types.ObjectId, ref: "Room" }],
  title: { type: String, require: true },
});

const Catagory = models.Catagory || model("Catagory", CatagorySchema);
export default Catagory;
