import multer from "multer";
import routes from "./routes";

const multerImage = multer({ dest: "uploads/images/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  //  res.locals.loggedUser = req.user || null;
  res.locals.user = {
    isAuthenticated: false,
    id: 1,
  };
  next();
};

export const uploadImage = multerImage.single("imageFile");
