// backend/controller/RoomController.js
import Room from "../models/Room.js";

// ambil semua rooms
export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// ambil 1 room berdasarkan id
export const getRoomById = async (req, res) => {
  try {
    const room = await Room.findOne({
      where: { id: req.params.id },
    });
    if (!room) return res.status(404).json({ msg: "Room tidak ditemukan" });
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};