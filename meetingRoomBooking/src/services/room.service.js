import Room from "../models/room.model.js";

export const createRoom = async (data) => {
  if (data.capacity < 1) {
    throw new Error("Capacity must be at least 1");
  }

  const existing = await Room.findOne({
    name: new RegExp(`^${data.name}$`, "i")
  });

  if (existing) {
    throw new Error("Room name must be unique");
  }

  return await Room.create(data);
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
