import express from "express";
import routes from "../routes";
import {
  imageDetail,
  deleteImage,
  getEditImage,
  postEditImage,
  getUpload,
  postUpload,
} from "../controllers/imageController";
import { uploadImage, onlyPrivate } from "../middlewares";

const imageRouter = express.Router();

// 업로드
imageRouter.get(routes.upload, onlyPrivate, getUpload);
imageRouter.post(routes.upload, onlyPrivate, uploadImage, postUpload);
// 이미지 디테일
imageRouter.get(routes.imageDetail(), imageDetail);
// 이미지 수정
imageRouter.get(routes.editImage(), onlyPrivate, getEditImage);
imageRouter.post(routes.editImage(), onlyPrivate, postEditImage);
// 이미지 삭제
imageRouter.get(routes.deleteImage(), onlyPrivate, deleteImage);

export default imageRouter;
