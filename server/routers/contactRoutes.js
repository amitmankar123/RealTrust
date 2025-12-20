import express from "express";
import {
  createContact,
  getAllContacts,
} from "../controllers/contact.controller.js";

const router = express.Router();

// Landing page
router.post("/", createContact);

// Admin panel
router.get("/", getAllContacts);

export default router;
