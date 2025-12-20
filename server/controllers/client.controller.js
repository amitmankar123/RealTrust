import Client from "../models/client.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
export const createClient = async(req,res)=>{
//     1. Client’s Image
// 2. Client’s Name
// 3. Client’s Description
// 4. Client’s Designation (Ex- CEO, Web Developer, Designer)

const {name , designation , description}= req.body;

 if (!name || !designation || !description ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const clientImageLocalPath = req.files?.image?.[0]?.path;
    if (!clientImageLocalPath) {
      return res.status(400).json({
        success: false,
        message: "client image is required",
      });
    }
    console.log(clientImageLocalPath);
     const existingClient = await Client.findOne({ name });
    
    if (existingClient) {
      return res.status(409).json({
        success: false,
        message: "Contact already exists",
      });
    }

    const clientImage = await uploadOnCloudinary(clientImageLocalPath);
        if (!clientImage) {
          return res.status(400).json({
            success: false,
            message: "client image upload failed",
          });
        }

    const client = await Client.create({
        name,
        designation,
        description,
        image: clientImage.secure_url,
    });

    return res.status(201).json({
        success: true,
        message: "Client added successfully",
        client,
    });
};


export const getAllClients = async (req, res) => {
  try {
    const client = await Client.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      client,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};