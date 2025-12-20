import express from "express";
import {
  subscribeNewsletter,
  getAllSubscribedEmails,
} from "../controllers/newsLetterSubscribe.contoller.js";

const router = express.Router();

// Landing page
router.post("/", subscribeNewsletter);

// Admin panel
router.get("/", getAllSubscribedEmails);

export default router;
