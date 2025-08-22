// backend/routes/RoomRoute.js
import express from "express";
import {
  getRooms,
  getRoomById,
} from "../controller/RoomController.js";

const router = express.Router();

router.get("/rooms", getRooms);
router.get("/rooms/:id", getRoomById);

export default router;
