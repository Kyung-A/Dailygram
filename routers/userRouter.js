import express from "express";
import routes from "../routes";
import {
  users,
  userPage,
  editProfile,
  direct,
} from "../controllers/userController";
import { onlyPrivate, onlyPublic } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.users, onlyPrivate, users);
userRouter.get(routes.userPage(), onlyPublic, userPage);
userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.direct, onlyPrivate, direct);

export default userRouter;
