import express from "express";
import routes from "../routes";
import {
  images,
  upload,
  imageDetail,
  deleteImage,
  deleteComment,
} from "../controllers/imageContriller";

const imageRouter = express.Router();

imageRouter.get(routes.images, images);
imageRouter.get(routes.upload, upload);
imageRouter.get(routes.imageDetail, imageDetail);
imageRouter.get(routes.deleteImage, deleteImage);
imageRouter.get(routes.deleteComment, deleteComment);

export default imageRouter;
