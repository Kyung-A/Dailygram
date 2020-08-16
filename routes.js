// 어디에나 존재해야 할 URL
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const USER_DELETE = "/:id/user-delete";

// 유저한테 보여질 URL

const USERS = "/users";
const USER_PAGE = "/:id";
const EDIT_PROFILE = "/edit-profile";
const ME = "/me";
const DIRECT = "/direct";

// 이미지가 올라가는 URL

const IMAGES = "/images";
const UPLOAD = "/upload";
const IMAGE_DETAIL = "/:id";
const EDIT_IMAGE = "/:id/edit";
const DELETE_IMAGE = "/:id/delete";

// 네이버, 카카오 로그인

const NAVER = "/auth/naver",
  NAVER_CALLBACK = "/auth/naver/callback",
  KAKAO = "/auth/kakao",
  KAKAO_CALLBACK = "/auth/kakao/callback";

// AJAX/API
const API = "/api",
  REGISTER_LIKE = "/:id/view",
  ADD_COMMENT = "/:id/comment",
  DELETE_COMMENT = "/:id/comment/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  users: USERS,
  userPage: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_PAGE;
    }
  },
  editProfile: EDIT_PROFILE,
  editImage: (id) => {
    if (id) {
      return `/images/${id}/edit`;
    } else {
      return EDIT_IMAGE;
    }
  },
  images: IMAGES,
  upload: UPLOAD,
  imageDetail: (id) => {
    if (id) {
      return `/images/${id}`;
    } else {
      return IMAGE_DETAIL;
    }
  },
  userDelete: (id) => {
    if (id) {
      return `/users/${id}/user-delete`;
    } else {
      return USER_DELETE;
    }
  },
  deleteImage: (id) => {
    if (id) {
      return `/images/${id}/delete`;
    } else {
      return DELETE_IMAGE;
    }
  },
  deleteComment: DELETE_COMMENT,
  me: ME,
  direct: DIRECT,
  naver: NAVER,
  naverCallback: NAVER_CALLBACK,
  kakao: KAKAO,
  kakaoCallback: KAKAO_CALLBACK,
  api: API,
  registerLike: REGISTER_LIKE,
  addComment: ADD_COMMENT,
};

export default routes;
