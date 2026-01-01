import Room from "../models/room.model.js";
import Booking from "../models/booking.model.js";

function calculateBusinessHours(from, to) {
  let totalHours = 0;
  let current = new Date(from);
  const end = new Date(to);

  while (current < end) {
    const day = current.getDay(); // 0 = Sun, 6 = Sat

    if (day !== 0 && day !== 6) {
      totalHours += 12; // 8AM–8PM
    }

    current.setDate(current.getDate() + 1);
  }

  return totalHours;
}

export const roomUtilization = async (from, to) => {
  const rooms = await Room.find();
  const report = [];

  const businessHours = calculateBusinessHours(from, to);

  for (const room of rooms) {
    const bookings = await Booking.find({
      roomId: room._id,
      status: "confirmed",
      startTime: { $lt: new Date(to) },
      endTime: { $gt: new Date(from) },
    });

    let totalBookedHours = 0;

    for (const booking of bookings) {
      const start = new Date(
        Math.max(new Date(booking.startTime), new Date(from))
      );
      const end = new Date(Math.min(new Date(booking.endTime), new Date(to)));

      const hours = (end - start) / (1000 * 60 * 60);
      totalBookedHours += hours;
    }

    report.push({
      roomId: room._id,
      roomName: room.name,
      totalBookingHours: Number(totalBookedHours.toFixed(2)),
      utilizationPercent:
        businessHours === 0
          ? 0
          : Number((totalBookedHours / businessHours).toFixed(2)),
    });
  }

  return report;
};
