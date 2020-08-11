import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "파일 URL이 없습니다.",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const model = mongoose.model("Image", ImageSchema);

export default model;
