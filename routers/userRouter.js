import express from "express";
import routes from "../routes";
import {
  users,
  userPage,
  getEditProfile,
  direct,
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.users, onlyPrivate, users);
userRouter.get(routes.userPage(), userPage);
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.get(routes.direct, onlyPrivate, direct);

export default userRouter;
