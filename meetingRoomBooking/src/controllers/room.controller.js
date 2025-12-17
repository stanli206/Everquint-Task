import * as service from "../services/room.service.js";

export const createRoom = async (req, res) => {
  try {
    const room = await service.createRoom(req.body);
    res.status(201).json(room);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const listRooms = async (req, res) => {
  const rooms = await service.listRooms(req.query);
  res.json(rooms);
};
