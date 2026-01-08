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

router.post(
  "/",
  upload.fields({name:"images", maxCount:8}),
  createTour
);

router.get("/", getAllTours);
router.get("/:id", getTourById);

router.put(
  "/:id",
  upload.fields({name:"photos", maxCount:8}),
  updateTour
);

router.delete("/:id", deleteTour);

export default router;
