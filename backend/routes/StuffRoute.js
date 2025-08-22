// backend/routes/StuffRoute.js
import express from "express";
import { getStuffs, getStuffById } from "../controller/StuffController.js";

const router = express.Router();

router.get("/stuffs", getStuffs);
router.get("/stuffs/:id", getStuffById);

export default router;
