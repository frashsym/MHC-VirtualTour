// backend/controllers/TagController.js
import Tag from "../models/Tag.js";
import Stuff from "../models/Stuff.js";

// ambil semua tags + relasi ke stuff
export const getTags = async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [Stuff],
    });
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// ambil tag by id + stuffs
export const getTagById = async (req, res) => {
  try {
    const tag = await Tag.findOne({
      where: { id: req.params.id },
      include: [Stuff],
    });
    if (!tag) return res.status(404).json({ msg: "Tag tidak ditemukan" });
    res.status(200).json(tag);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
