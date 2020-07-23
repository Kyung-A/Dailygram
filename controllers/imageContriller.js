import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", images });
};

// 업로드 페이지
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, description },
  } = req;
  res.redirect(routes.imageDetail(241349));
};

export const imageDetail = (req, res) =>
  res.render("imageDetail", { pageTitle: "ImageDetail" });

export const editImage = (req, res) =>
  res.render("editImage", { pageTitle: "editImage" });

export const deleteImage = (req, res) => res.render("deleteImage");

export const deleteComment = (req, res) => res.render("deleteComment");
