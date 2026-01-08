import Guides from "../models/TourGuide.model.js";

// CREATE GUIDE
export const createGuide = async (req, res) => {
  try {
    const guide = await Guides.create(req.body);

    res.status(201).json({
      success: true,
      message: "Guide application submitted successfully",
      data: guide,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL GUIDES
export const getAllGuides = async (req, res) => {
  try {
    console.log("hello")
    const guides = await Guides.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: guides,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET SINGLE GUIDE
export const getGuideById = async (req, res) => {
  try {
    const guide = await Guides.findById(req.params.id);

    if (!guide) {
      return res.status(404).json({
        success: false,
        message: "Guide not found",
      });
    }

    res.json({ success: true, data: guide });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE GUIDE
export const updateGuide = async (req, res) => {
  try {
    const guide = await Guides.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!guide) {
      return res.status(404).json({
        success: false,
        message: "Guide not found",
      });
    }

    res.json({
      success: true,
      message: "Guide updated successfully",
      data: guide,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// DELETE GUIDE
export const deleteGuide = async (req, res) => {
  try {
    const guide = await Guides.findByIdAndDelete(req.params.id);

    if (!guide) {
      return res.status(404).json({
        success: false,
        message: "Guide not found",
      });
    }

    res.json({
      success: true,
      message: "Guide deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
