import Booking from "../models/booking.model.js";
import Room from "../models/room.model.js";
import Idempotency from "../models/idempotency.model.js";
import { AppError } from "../utils/appError.util.js";

export const createBooking = async (data, key) => {
  // Room exists?
  const room = await Room.findById(data.roomId);
  if (!room) {
    const err = new AppError("Room not found");
    err.code = 404;
    throw err;
  }

  // Time validation
  const start = new Date(data.startTime);
  const end = new Date(data.endTime);

  if (start >= end) {
    throw new AppError("startTime must be before endTime");
  }

  const duration = (end - start) / (1000 * 60);
  if (duration < 15 || duration > 240) {
    throw new AppError("Booking duration must be 15 to 240 minutes");
  }

  // Working hours (Mon–Fri, 8–20)
  const day = start.getDay();
  const hour = start.getHours();
  if (day === 0 || day === 6 || hour < 8 || hour >= 20) {
    throw new AppError("Booking allowed only Mon–Fri, 8AM–8PM");
  }

  // Idempotency
  if (key) {
    const existing = await Idempotency.findOne({
      key,
      organizerEmail: data.organizerEmail,
    });
    if (existing) return existing.booking;
  }

  // Overlap check
  const overlap = await Booking.findOne({
    roomId: data.roomId,
    status: "confirmed",
    startTime: { $lt: end },
    endTime: { $gt: start },
  });

  if (overlap) {
    throw new AppError("Overlapping booking exists", 409);
  }
  // if (overlap) {
  //   const err = new AppError("Overlapping booking exists");
  //   err.code = 409;
  //   throw err;
  // }

  // Create booking
  const booking = await Booking.create(data);

  // Save idempotency
  if (key) {
    await Idempotency.create({
      key,
      organizerEmail: data.organizerEmail,
      booking: booking.toObject(),
    });
  }

  return booking;
};

export const listBookings = async ({
  roomId,
  from,
  to,
  limit = 10,
  offset = 0,
}) => {
  const filter = {};

  if (roomId) filter.roomId = roomId;
  if (from && to) {
    filter.startTime = { $gte: new Date(from) };
    filter.endTime = { $lte: new Date(to) };
  }

  const items = await Booking.find(filter)
    .skip(Number(offset))
    .limit(Number(limit));

  const total = await Booking.countDocuments(filter);

  return { items, total, limit: Number(limit), offset: Number(offset) };
};

export const cancelBooking = async (id) => {
  const booking = await Booking.findById(id);
  if (!booking) throw new Error("Booking not found");

  const diff = (new Date(booking.startTime) - new Date()) / (1000 * 60);
  if (diff < 60) throw new Error("Cannot cancel within 1 hour of start");

  booking.status = "cancelled";
  await booking.save();

  return booking;
};
