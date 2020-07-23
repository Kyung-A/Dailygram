import routes from "../routes";

//회원가입 페이지
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    res.redirect(routes.home);
  }
};

// 로그인 페이지
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  res.redirect(routes.home);
};

export const users = (req, res) => res.render("users");

export const userPage = (req, res) =>
  res.render("userPage", { pageTitle: "UserPage" });

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "EditProfile" });

export const direct = (req, res) =>
  res.render("direct", { pageTitle: "Direct" });
