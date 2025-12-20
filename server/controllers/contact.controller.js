import Contact from "../models/contact.js";

export const createContact = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;
console.log(req.body);
    if (!fullName || !email || !mobile || !city) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingContact = await Contact.findOne({ email });

if (existingContact) {
  return res.status(409).json({
    success: false,
    message: "Contact already exists",
  });
}


    await Contact.create({
      fullName,
      email,
      mobile,
      city,
    });

    return res.status(201).json({
      success: true,
      message: "Contact added successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      contacts,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

