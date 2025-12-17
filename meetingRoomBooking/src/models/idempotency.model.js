import mongoose from "mongoose";

const idempotencySchema = new mongoose.Schema({
  key: String,
  organizerEmail: String,
  response: Object
});

idempotencySchema.index({ key: 1, organizerEmail: 1 }, { unique: true });

export default mongoose.model("Idempotency", idempotencySchema);
