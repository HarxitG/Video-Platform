import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import Video from "../models/Video.js";
import processVideo from "../utils/processVideo.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("video"), async (req, res) => {
  const video = await Video.create({ filename: req.file.filename });
  processVideo(video);
  res.json({ message: "Uploaded" });
});

router.get("/", async (_, res) => {
  res.json(await Video.find());
});

router.get("/stream/:id", async (req, res) => {
  const video = await Video.findById(req.params.id);
  const filePath = path.resolve("uploads", video.filename);
  fs.createReadStream(filePath).pipe(res);
});

export default router;
