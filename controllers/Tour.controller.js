import Tour from "../models/Tour.model.js";

// CREATE TOUR
export const createTour = async (req, res) => {
  try {
        console.log(req.files)

    const images = req.files?.map((file) => file.location);
    if (!images || images.length === 0) {
      return res.status(400).json({

        success: false,
        message: "At least one tour image is required",
      });
    }

    const tour = await Tour.create({
      tourName: req.body.tourName,
      location: req.body.location,
      description: req.body.description,
      tourImages: images,
    });

    res.status(201).json({
      success: true,
      message: "Tour created successfully",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

// GET ALL TOURS
export const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: tours,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET TOUR BY ID
export const getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }

    res.json({ success: true, data: tour });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE TOUR
export const updateTour = async (req, res) => {
  try {
    const updateData = req.body;

    if (req.files && req.files.length > 0) {
      updateData.tourImages = req.files.map((file) => file.path);
    }

    const tour = await Tour.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }

    res.json({
      success: true,
      message: "Tour updated successfully",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// DELETE TOUR
export const deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }

    res.json({
      success: true,
      message: "Tour deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
