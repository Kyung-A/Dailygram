import routes from "../routes";
import Image from "../models/Image";
import Comment from "../models/Comment";

export const home = async (req, res) => {
  try {
    const images = await Image.find({});
    res.render("home", { pageTitle: "Home", images });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", images: [] });
  }
};

// 업로드 페이지
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
  const {
    body: { description, createdAt },
    file: { path },
  } = req;
  const newImage = await Image.create({
    fileUrl: path.replace(/\\/g, "/"),
    description,
    createdAt,
  });
  console.log(newImage);
  res.redirect(routes.imageDetail(newImage.id));
};

export const imageDetail = (req, res) =>
  res.render("imageDetail", { pageTitle: "ImageDetail" });

export const editImage = (req, res) =>
  res.render("editImage", { pageTitle: "editImage" });

export const deleteImage = (req, res) => res.render("deleteImage");

export const deleteComment = (req, res) => res.render("deleteComment");
