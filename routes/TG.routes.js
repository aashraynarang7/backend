import express from "express"
const router = express.Router();
import {createBooking, getAllBookings, getBookingById, updateBooking, deleteBooking} from "../controllers/TG.controller.js"

router.post("/", createBooking);
router.get("/", getAllBookings);
router.get("/:id", getBookingById);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);

const tgbookingRoutes= router;
export default tgbookingRoutes;
