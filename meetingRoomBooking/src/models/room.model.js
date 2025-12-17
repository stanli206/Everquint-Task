import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  capacity: { type: Number, min: 1 },
  floor: Number,
  amenities: [String]
});

export default mongoose.model("Room", roomSchema);
