import express from "express";
import {
  createTour,
  getAllTours,
  getTourById,
  updateTour,
  deleteTour,
} from "../controllers/Tour.controller.js";

import { upload } from "../middleware/s3.uploads.js";

const router = express.Router();

router.post("/", upload.array("images", 8), createTour);

router.get("/", getAllTours);
router.get("/:id", getTourById);

router.put("/:id", upload.array("images", 8), updateTour);

router.delete("/:id", deleteTour);

export default router;
