import express from "express";
import {
  createGuide,
  getAllGuides,
  getGuideById,
  updateGuide,
  deleteGuide,
} from "../controllers/TourGuide.js";
import { upload } from "../middleware/s3.uploads.js";

const router = express.Router();

router.post("/",  upload.single("image"),
 createGuide);
router.get("/", getAllGuides);
router.get("/:id", getGuideById);
router.put("/:id",   upload.single("image"),
updateGuide);
router.delete("/:id", deleteGuide);

export default router;
