import { images } from "../db";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", images });
};

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const imageDetail = (req, res) =>
  res.render("imageDetail", { pageTitle: "ImageDetail" });

export const editImage = (req, res) =>
  res.render("editImage", { pageTitle: "editImage" });

export const deleteImage = (req, res) => res.render("deleteImage");

export const deleteComment = (req, res) => res.render("deleteComment");
