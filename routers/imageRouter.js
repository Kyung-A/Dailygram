import express from "express";
import routes from "../routes";
import {
  imageDetail,
  deleteImage,
  deleteComment,
  getEditImage,
  postEditImage,
  getUpload,
  postUpload,
} from "../controllers/imageContriller";
import { uploadImage } from "../middlewares";

const imageRouter = express.Router();

// 업로드
imageRouter.get(routes.upload, getUpload);
imageRouter.post(routes.upload, uploadImage, postUpload);
// 이미지 디테일
imageRouter.get(routes.imageDetail(), imageDetail);
// 이미지 삭제
imageRouter.get(routes.deleteImage(), deleteImage);
// 댓글 삭제
imageRouter.get(routes.deleteComment(), deleteComment);
// 이미지 수정
imageRouter.get(routes.editImage(), getEditImage);
imageRouter.post(routes.editImage(), postEditImage);

export default imageRouter;
