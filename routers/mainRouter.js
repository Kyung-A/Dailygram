import express from "express";
import routes from "../routes";
import { home, join, login } from "../controllers/userController";
import { upload } from "../controllers/imageContriller";

const mainRouter = express.Router();

mainRouter.get(routes.home, home);
mainRouter.get(routes.upload, upload);
mainRouter.get(routes.join, join);
mainRouter.get(routes.login, login);

export default mainRouter;
