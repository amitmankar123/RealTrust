import express from "express";
import { createProject,getProjects } from "../controllers/project.controller.js";
import {upload} from "../middlware/multer.middlware.js";
const router = express.Router();

router.post(
  "/",
  upload.fields([{ name: "image", maxCount: 1 }]),
  createProject
);
router.get("/", getProjects);
export default router;
