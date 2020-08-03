import passport from "passport";
import routes from "../routes";
import User from "../models/User";

//회원가입 페이지
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

// 로그인 페이지
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

//네이버 로그인 컨트롤러
export const naverLogin = passport.authenticate("naver", {
  successRedirect: routes.home,
  failureRedirect: routes.login,
});

export const naverLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { uniqId, nickname, email, profile_image },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.naverId = uniqId;
      user.avatarUrl = profile_image;
      user.name = nickname;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      naverId: uniqId,
      email,
      name: nickname,
      avatarUrl: profile_image,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postNaverLogin = (req, res) => {
  res.redirect(routes.home);
};

// 카카오 로그인 컨트롤러
export const kakaoLogin = passport.authenticate("kakao", {
  successRedirect: routes.home,
  failureRedirect: routes.login,
});

export const kakaoLoginCallback = async (_, __, profile, cb) => {
  const {
    id,
    username,
    _json: {
      properties: { profile_image },
      kakao_account: { email },
    },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.kakaoId = id;
      user.avatarUrl = profile_image;
      user.name = username;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      kakaoId: id,
      email,
      name: username,
      avatarUrl: profile_image,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postKakaoLogin = (req, res) => {
  res.redirect(routes.home);
};

// 로그아웃
export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const users = (req, res) => res.render("users");

// 로그인 상태의 유저
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("images");
    res.render("userPage", { pageTitle: "User Page", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};

// 유저 프로필 페이지이지만 home으로 넘어간다. 에러페이지가 안뜨기 위한 설정
export const userPage = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id).populate("images");
    res.render("userPage", { pageTitle: "User Page", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};

// 프로필 수정 페이지
export const getEditProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "EditProfile" });

export const direct = (req, res) =>
  res.render("direct", { pageTitle: "Direct" });
