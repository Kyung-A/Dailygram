// 어디에나 존재해야 할 URL
const HOME = "/",
  JOIN = "/join",
  LOGIN = "/login",
  LOGOUT = "/logout";

// 유저한테 보여질 URL

const USERS = "/users",
  USER_PAGE = "/:id",
  EDIT_PROFILE = "/edit-profile",
  ME = "/me";

// 이미지가 올라가는 URL

const IMAGES = "/images",
  UPLOAD = "/upload",
  IMAGE_DETAIL = "/:id",
  DELETE_IMAGE = "/:id/deleta",
  DELETE_COMMENT = "/:id/delete-comment";

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
};

export default routes;
