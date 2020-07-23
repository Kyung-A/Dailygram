import express from "express";
import routes from "../routes";
import {
  imageDetail,
  deleteImage,
  deleteComment,
  editImage,
  getUpload,
  postUpload,
} from "../controllers/imageContriller";

const imageRouter = express.Router();

imageRouter.get(routes.upload, getUpload);
imageRouter.post(routes.upload, postUpload);
imageRouter.get(routes.imageDetail(), imageDetail);
imageRouter.get(routes.deleteImage(), deleteImage);
imageRouter.get(routes.deleteComment(), deleteComment);
imageRouter.get(routes.editImage(), editImage);

export default imageRouter;
