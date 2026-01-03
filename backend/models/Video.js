import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  url: String,
  status: { type: String, default: "processing" },
});

export default mongoose.model("Video", videoSchema);
