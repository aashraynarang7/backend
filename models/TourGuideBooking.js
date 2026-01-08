import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    // PERSONAL INFO
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },

    // TRAVEL DETAILS
    placeToVisit: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    numberOfPersons: {
      type: Number,
      required: true,
      min: 1,
    },
    city: {
      type: String,
      required: true,
    },

    guideLanguages: {
      type: [String],
      required: true,
    },
    preferredGuideGender: {
      type: String,
      enum: ["male", "female", "any"],
      required: true,
    },

    // SERVICE DETAILS
    serviceDuration: {
      type: String,
      enum: ["half-day", "full-day"],
      required: true,
    },

    foreignLanguageRequired: {
      type: Boolean,
      default: false,
    },
    outstationService: {
      type: Boolean,
      default: false,
    },
    earlyLateHours: {
      type: Boolean,
      default: false,
    },
    extraCityAllowance: {
      type: Boolean,
      default: false,
    },
    specialEventAllowance: {
      type: Boolean,
      default: false,
    },

    // FEES (calculated on backend)
    totalFee: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
 const Tgbooking= mongoose.model("Tgbooking", bookingSchema);
 
export default Tgbooking