import Project from "../models/project.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const createProject = async (req, res) => {
  try {
    const { name, description } = req.body;

    // Validate text fields
    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Validate image
    const projectImageLocalPath = req.files?.image?.[0]?.path;
    if (!projectImageLocalPath) {
      return res.status(400).json({
        success: false,
        message: "Project image is required",
      });
    }
    console.log(projectImageLocalPath);

    // Check duplicate project
    const existingProject = await Project.findOne({ name });
    if (existingProject) {
      return res.status(409).json({
        success: false,
        message: "Project already exists",
      });
    }

    // Upload image to Cloudinary
    const projectImage = await uploadOnCloudinary(projectImageLocalPath);
    if (!projectImage) {
      return res.status(400).json({
        success: false,
        message: "Project image upload failed",
      });
    }

    // Save project
    const project = await Project.create({
      name,
      description,
      image: projectImage.secure_url,
    });

    return res.status(201).json({
      success: true,
      message: "Project created successfully",
      project,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, projects });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};
