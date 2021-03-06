import express from "express";
import routes from "../routes";
import {
  userPage,
  getEditProfile,
  postEditProfile,
  direct,
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

// 유저 프로필 수정 페이지
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);
// 실시간 채팅 (다이렉트)
userRouter.get(routes.direct, onlyPrivate, direct);
// 유저 디테일 페이지
userRouter.get(routes.userPage(), userPage);

export default userRouter;
