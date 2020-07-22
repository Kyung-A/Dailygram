import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  //  res.locals.loggedUser = req.user || null;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};
