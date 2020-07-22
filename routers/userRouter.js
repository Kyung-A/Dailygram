import express from "express";
import routes from "../routes";
import {
  users,
  userPage,
  editProfile,
  direct,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userPage(), userPage);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.direct, direct);

export default userRouter;
