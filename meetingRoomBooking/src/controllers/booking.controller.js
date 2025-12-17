import * as service from "../services/booking.service.js";

export const createBooking = async (req, res) => {
  try {
    const booking = await service.createBooking(
      req.body,
      req.headers["idempotency-key"]
    );
    res.status(201).json(booking);
  } catch (err) {
    res.status(err.code || 400).json({ error: err.message });
  }
};

export const listBookings = async (req, res) => {
  const data = await service.listBookings(req.query);
  console.log(req.query);
  res.json(data);
};

export const cancelBooking = async (req, res) => {
  try {
    const booking = await service.cancelBooking(req.params.id);
    res.json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
