import passport from "passport";
import User from "./models/User";
import NaverStrategy from "passport-naver";
import KakaoStrategy from "passport-kakao";
import routes from "./routes";
import {
  naverLoginCallback,
  kakaoLoginCallback,
} from "./controllers/userController";

passport.use(User.createStrategy());

//네이버 로그인
passport.use(
  new NaverStrategy(
    {
      clientID: process.env.NAVER_ID,
      clientSecret: process.env.NAVER_SECRET,
      callbackURL: `http://localhost:7000${routes.naverCallback}`,
    },
    naverLoginCallback
  )
);

//카카오 로그인
passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.KAKAO_ID,
      clientSecret: "",
      callbackURL: `http://localhost:7000${routes.kakaoCallback}`,
    },
    kakaoLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
