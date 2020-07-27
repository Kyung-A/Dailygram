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
// 회원가입
mainRouter.get(routes.join, getJoin);
mainRouter.post(routes.join, postJoin);
// 로그인
mainRouter.get(routes.login, getLogin);
mainRouter.post(routes.login, postLogin);
// 로그아웃
mainRouter.get(routes.logout, logout);

export default mainRouter;
