import express from "express";
import routes from "../routes";
import {
  postRegisterLike,
  postAddComment,
} from "../controllers/imageController";

const apiRouter = express.Router();

apiRouter.post(routes.registerLike, postRegisterLike);
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
