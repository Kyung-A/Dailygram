export const me = (req, res) => res.render("Me");

export const join = (req, res) => res.render("join", { pageTitle: "Join" });

export const login = (req, res) => res.render("login", { pageTitle: "Login" });

export const logout = (req, res) => res.render("logout");

export const users = (req, res) => res.render("users");

export const userPage = (req, res) =>
  res.render("userPage", { pageTitle: "UserPage" });

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "EditProfile" });

export const direct = (req, res) =>
  res.render("direct", { pageTitle: "Direct" });
