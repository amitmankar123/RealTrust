import NewsLetter from "../models/Newsletters.js";

/**
 * BUSINESS LOGIC:
 * 1. Validate email
 * 2. Check duplicate
 * 3. Save email
 * 4. Return proper response
 */
export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    // 1️⃣ Validation
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // 2️⃣ Duplicate check
    const alreadySubscribed = await NewsLetter.findOne({ email });
    if (alreadySubscribed) {
      return res.status(409).json({
        success: false,
        message: "Email already subscribed",
      });
    }

    // 3️⃣ Save to DB
    await NewsLetter.create({ email });

    // 4️⃣ Success response
    return res.status(201).json({
      success: true,
      message: "Subscribed successfully",
    });

  } catch (error) {
    // 5️⃣ System failure handling
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * BUSINESS LOGIC:
 * Fetch all subscribed emails for admin panel
 */
export const getAllSubscribedEmails = async (req, res) => {
  try {
    const emails = await NewsLetter.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      emails,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
