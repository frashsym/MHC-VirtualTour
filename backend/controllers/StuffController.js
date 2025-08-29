// backend/controllers/StuffController.js
import Stuff from "../models/Stuff.js";
import Room from "../models/Room.js";
import Tag from "../models/Tag.js";

// ambil semua stuffs + relasi
export const getStuffs = async (req, res) => {
  try {
    const stuffs = await Stuff.findAll({
      include: [Room, Tag],
    });
    res.status(200).json(stuffs);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// ambil stuff berdasarkan id
export const getStuffById = async (req, res) => {
  try {
    const stuff = await Stuff.findOne({
      where: { id: req.params.id },
      include: [Room, Tag],
    });
    if (!stuff) return res.status(404).json({ msg: "Stuff tidak ditemukan" });
    res.status(200).json(stuff);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
