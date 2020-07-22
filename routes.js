// 어디에나 존재해야 할 URL
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

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
const DELETE_IMAGE = "/:id/deleta";
const DELETE_COMMENT = "/:id/delete-comment";

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
      return `/users/${id}`;
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
  deleteImage: (id) => {
    if (id) {
      return `/images/${id}/delete`;
    } else {
      return DELETE_IMAGE;
    }
  },
  deleteComment: (id) => {
    if (id) {
      return `/images/${id}/delete-comment`;
    } else {
      return DELETE_COMMENT;
    }
  },
  me: ME,
  direct: DIRECT,
};

export default routes;
