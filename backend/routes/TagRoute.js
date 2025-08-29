// backend/routes/TagRoute.js
import express from "express";
import { getTags, getTagById } from "../controllers/TagController.js";

const router = express.Router();

router.get("/tags", getTags);
router.get("/tags/:id", getTagById);

export default router;
