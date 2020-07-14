import routes from "../routes";

export const home = (req, res) => {
  res.send("Home page");
};

export const me = (req, res) => {
  res.send("Me page");
};

export const upload = (req, res) => {
  res.send("upload page");
};

export const join = (req, res) => {
  res.send("join page");
};

export const login = (req, res) => {
  res.send("login page");
};

export const logout = (req, res) => {
  res.send("logout page");
};

export const editProfile = (req, res) => {
  res.send("edit Profile");
};
