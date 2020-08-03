import express from "express";
import passport from "passport";
import routes from "../routes";
import {
  getLogin,
  postLogin,
  logout,
  getJoin,
  postJoin,
  naverLogin,
  postNaverLogin,
  kakaoLogin,
  postKakaoLogin,
  getMe,
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

// 로그인한 유저
mainRouter.get(routes.me, getMe);

// 네이버 로그인
mainRouter.get(routes.naver, naverLogin);
mainRouter.get(
  routes.naverCallback,
  passport.authenticate("naver", { failureRedirect: "/login" }),
  postNaverLogin
);

// 카카오 로그인
mainRouter.get(routes.kakao, kakaoLogin);
mainRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: "/login" }),
  postKakaoLogin
);

// 로그아웃
mainRouter.get(routes.logout, onlyPrivate, logout);

export default mainRouter;
