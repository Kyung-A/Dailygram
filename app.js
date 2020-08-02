import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import mainRouter from "./routers/mainRouter";
import userRouter from "./routers/userRouter";
import imageRouter from "./routers/imageRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

import "./passport";

const app = express();

const CookieStore = MongoStore(session);

//미들웨어
app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.COOKIE,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(localsMiddleware);

//라우터
//유저와 이미지 라우터는 로컬호스트:7000 / users 또는 images / 예)edit-profile 또는 upload 식으로 들어가야함
app.use(routes.home, mainRouter);
app.use(routes.users, userRouter);
app.use(routes.images, imageRouter);

export default app;
