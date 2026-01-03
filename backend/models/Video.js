import mongoose from "mongoose";

export default mongoose.model(
  "Video",
  new mongoose.Schema({
    filename: String,
    status: { type: String, default: "processing" },
  })
);
