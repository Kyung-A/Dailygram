import express from "express";
import routes from "../routes";
import {
  getLogin,
  postLogin,
  logout,
  getJoin,
  postJoin,
} from "../controllers/userController";
import { home } from "../controllers/imageContriller";

const mainRouter = express.Router();

mainRouter.get(routes.home, home);
mainRouter.get(routes.join, getJoin);
mainRouter.post(routes.join, postJoin);
mainRouter.get(routes.login, getLogin);
mainRouter.post(routes.login, postLogin);
mainRouter.get(routes.logout, logout);

export default mainRouter;
