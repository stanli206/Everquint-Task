import Room from "../models/room.model.js";

export const createRoom = async (data) => {
  // 1data itself check
  if (!data || typeof data !== "object") {
    throw new Error("Room data is required");
  }

  const { name, capacity, amenities } = data;

  //  name validation
  if (!name || typeof name !== "string" || name.trim() === "") {
    throw new Error("Room name is required");
  }

  // capacity validation
  if (capacity === undefined || capacity === null) {
    throw new Error("Capacity is required");
  }

  if (typeof capacity !== "number" || capacity < 1) {
    throw new Error("Capacity must be a number and at least 1");
  }
  // amenities validation
  let amenitiesArray = [];

  if (amenities !== undefined) {
    if (!Array.isArray(amenities)) {
      throw new Error("Amenities must be an array");
    }

    amenitiesArray = amenities;
  }

  // unique room name check (case-insensitive)
  const existing = await Room.findOne({
    name: new RegExp(`^${name}$`, "i"),
  });

  if (existing) {
    throw new Error("Room name must be unique");
  }

  //finally create
  return await Room.create({
    name: name.trim(),
    capacity,
    amenities: amenitiesArray,
  });
};

export const listRooms = async (query) => {
  const filter = {};

  if (query.minCapacity) {
    filter.capacity = { $gte: Number(query.minCapacity) };
  }

  if (query.amenity) {
    filter.amenities = query.amenity;
  }

  return await Room.find(filter);
};
