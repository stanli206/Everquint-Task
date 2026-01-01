import "./setup.js";
import request from "supertest";
import app from "../src/app.js";
import Room from "../src/models/room.model.js";
import Booking from "../src/models/booking.model.js";

describe("Booking Overlap Rules", () => {
  let roomId;

  // Before each test, create a fresh room
  beforeEach(async () => {
    await Room.deleteMany();
    await Booking.deleteMany();

    const room = await Room.create({
      name: "Overlap Test Room",
      capacity: 6,
      floor: 1,
      amenities: ["TV"],
    });

    roomId = room._id;
  });

  test("should reject overlapping bookings for the same room", async () => {
    // First booking (valid)
    const firstResponse = await request(app).post("/bookings").send({
      roomId,
      title: "First Meeting",
      organizerEmail: "a@test.com",
      startTime: "2025-01-06T10:00:00",
      endTime: "2025-01-06T11:00:00",
    });

    expect(firstResponse.statusCode).toBe(201);

    // Second booking (overlapping)
    const secondResponse = await request(app).post("/bookings").send({
      roomId,
      title: "Overlapping Meeting",
      organizerEmail: "b@test.com",
      startTime: "2025-01-06T10:30:00",
      endTime: "2025-01-06T11:30:00",
    });


    expect(secondResponse.statusCode).toBe(409);
    expect(secondResponse.body.error).toBe("Overlapping booking exists");
  });
});
