import express from "express";
import routes from "../routes";
import {
  postRegisterLike,
  postAddComment,
  postDeleteComment,
} from "../controllers/imageController";

const apiRouter = express.Router();

apiRouter.post(routes.registerLike, postRegisterLike);
apiRouter.post(routes.addComment, postAddComment);
apiRouter.post(routes.deleteComment, postDeleteComment);

export default apiRouter;
