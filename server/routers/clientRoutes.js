import express from "express";
import { createClient, getAllClients} from "../controllers/client.controller.js";
import { upload } from "../middlware/multer.middlware.js";
const router = express.Router();

router.post("/",  upload.fields([{ name: "image", maxCount: 1 }])
,createClient);
router.get("/",getAllClients)
export default router;
