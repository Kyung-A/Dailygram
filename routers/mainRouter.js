import express from "express";
import routes from "../routes";
import { join, login, logout } from "../controllers/userController";
import { home } from "../controllers/imageContriller";

const mainRouter = express.Router();

mainRouter.get(routes.home, home);
mainRouter.get(routes.join, join);
mainRouter.get(routes.login, login);
mainRouter.get(routes.logout, logout);

export default mainRouter;
