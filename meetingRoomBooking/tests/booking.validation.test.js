import "./setup.js";
import request from "supertest";
import app from "../src/app.js";
import Room from "../src/models/room.model.js";

let roomId;

beforeEach(async () => {
  await Room.deleteMany({});

  const room = await Room.create({
    name: "Test Room",
    capacity: 5,
    floor: 1,
    amenities: [],
  });

  roomId = room._id;
});

test("should reject when startTime is after endTime", async () => {
  const res = await request(app).post("/bookings").send({
    roomId,
    title: "Invalid Meeting",
    organizerEmail: "a@test.com",
    startTime: "2025-01-06T12:00:00",
    endTime: "2025-01-06T10:00:00",
  });

  expect(res.statusCode).toBe(400);
  expect(res.body.error).toBe("startTime must be before endTime");
});
