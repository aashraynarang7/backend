import mongoose from "mongoose";

const guideSchema = new mongoose.Schema(
  {
    // PERSONAL INFO
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    guideLocation: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/,
      unique:true,
    },
    profilePicture: {
      type: String, // URL / file path
    },

    // VERIFICATION
    panNumber: {
      type: String,
      uppercase: true,
      unique: true,
    },
    guideType: {
      type: String,
      enum: ["normal", "escort"],
      required: true,
    },
    idLicense: {
      type: String,
      required: true,
      unique: true,
    },
    aadhaarCard: {
      type: String,
      required: true,
      unique:true,
    },

    // LANGUAGES
    preferredLanguages: {
      type: [String],
      required: true,
      validate: {
        validator: (v) => v.length > 0,
        message: "At least one language is required",
      },
    },

    // STATUS
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Guides", guideSchema);
