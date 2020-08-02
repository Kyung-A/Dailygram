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
import { onlyPrivate, onlyPublic } from "../middlewares";

const mainRouter = express.Router();

mainRouter.get(routes.home, home);
// 회원가입
mainRouter.get(routes.join, onlyPublic, getJoin);
mainRouter.post(routes.join, onlyPublic, postJoin, postLogin);
// 로그인
mainRouter.get(routes.login, onlyPublic, getLogin);
mainRouter.post(routes.login, onlyPublic, postLogin);
// 로그아웃
mainRouter.get(routes.logout, onlyPrivate, logout);

export default mainRouter;
