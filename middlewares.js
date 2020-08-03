import multer from "multer";
import routes from "./routes";

const multerImage = multer({ dest: "uploads/images/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

//회원, 비회원 페이지 접근 제한
//비회원도 공개
export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

//회원만 공개
export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadImage = multerImage.single("imageFile");
