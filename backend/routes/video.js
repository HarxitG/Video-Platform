import express from "express";
import Video from "../models/Video.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
});

router.post("/", auth, async (req, res) => {
  const video = await Video.create(req.body);
  res.json(video);
});

export default router;
