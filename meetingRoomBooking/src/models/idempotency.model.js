import mongoose from "mongoose";

const idempotencySchema = new mongoose.Schema({
  key: { type: String, required: true },
  organizerEmail: { type: String, required: true },
  booking: { type: Object, required: true },
});

idempotencySchema.index({ key: 1, organizerEmail: 1 }, { unique: true });

export default mongoose.model("Idempotency", idempotencySchema);
