import routes from "../routes";
import Image from "../models/Image";
import Comment from "../models/Comment";

export const home = async (req, res) => {
  try {
    const images = await Image.find({}).sort({ _id: -1 });
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
  res.redirect(routes.imageDetail(newImage.id));
};

// 이미지 페이지
export const imageDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const image = await Image.findById(id); //위에서 params로 얻은 id
    //.populate("creator")
    //.populate("comments");
    res.render("imageDetail", { pageTitle: "ImageDetail", image });
  } catch (error) {
    res.redirect(routes.home);
  }
};

//이미지 수정 페이지
export const getEditImage = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const image = await Image.findById(id);
    res.render("editImage", { pageTitle: "edit Image", image });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditImage = async (req, res) => {
  const {
    params: { id },
    body: { description },
  } = req;
  try {
    await Image.findOneAndUpdate({ _id: id }, { description });
    res.redirect(routes.imageDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

// 이미지 삭제
export const deleteImage = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Image.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

//댓글 삭제
export const deleteComment = (req, res) => res.render("deleteComment");
