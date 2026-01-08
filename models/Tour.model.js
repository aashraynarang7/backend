import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    tourName: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    tourImages: {
      type: [String], // image URLs or file paths
      required: true,
      validate: {
        validator: function (v) {
          return v.length > 0 && v.length <= 8;
        },
        message: "Upload minimum 1 and maximum 8 images",
      },
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);
