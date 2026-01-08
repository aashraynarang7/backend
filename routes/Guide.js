import express from "express";
import {
  createGuide,
  getAllGuides,
  getGuideById,
  updateGuide,
  deleteGuide,
} from "../controllers/TourGuide.js";

const router = express.Router();

router.post("/", createGuide);
router.get("/", getAllGuides);
router.get("/:id", getGuideById);
router.put("/:id", updateGuide);
router.delete("/:id", deleteGuide);

export default router;
