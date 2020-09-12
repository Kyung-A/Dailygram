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
    req.flash("error", "비밀번호가 서로 일치하지 않습니다");
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
  successFlash: "환영합니다. 데일리그램입니다!",
  failureFlash: "로그인 실패. 이메일 또는 비밀번호를 확인하세요.",
});

//네이버 로그인 컨트롤러
export const naverLogin = passport.authenticate("naver", {
  successFlash: "환영합니다. 데일리그램입니다!",
  failureFlash: "로그인 실패. 네이버 계정을 확인해주세요.",
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
  successFlash: "환영합니다. 데일리그램입니다!",
  failureFlash: "로그인 실패. 카카오 계정을 확인해주세요.",
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
  req.flash("info", "로그아웃 완료. 다음에 또 봐요 : )");
  req.logout();
  res.redirect(routes.home);
};

// 회원 탈퇴
export const userDelete = async (req, res) => {
  const {
    params: { id }, //url에서 id를 얻어옴
  } = req;

  try {
    const user = await User.findById(req.user.id);
    if (String(user.id) !== req.user.id) {
      throw Error();
    } else {
      await User.findByIdAndDelete({ _id: id });
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

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
    req.flash("error", "존재하지 않는 회원입니다.");
    res.redirect(routes.home);
  }
};

// 프로필 수정 페이지
export const getEditProfile = async (req, res) =>
  res.render("editProfile", { pageTitle: "EditProfile" });

export const postEditProfile = async (req, res) => {
  const {
    body: { name, email, id },
    file,
  } = req;
  try {
    await User.findByIdAndUpdate(req.user.id, {
      id,
      name,
      email,
      avatarUrl: file ? file.location : req.user.avatarUrl,
    });
    req.flash("success", "프로필 수정 완료.");
    res.redirect(routes.me);
  } catch (error) {
    req.flash("error", "프로필 수정 실패.");
    res.redirect(routes.editProfile);
  }
};

export const direct = (req, res) => {
  res.render("direct", { pageTitle: "Direct" });
};
