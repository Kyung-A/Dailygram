import routes from "../routes";
import Image from "../models/Image";
import Comment from "../models/Comment";

export const home = async (req, res) => {
  try {
    const images = await Image.find({}).sort({ _id: -1 }).populate("creator");
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
    body: { description },
    file: { path },
  } = req;
  const newImage = await Image.create({
    fileUrl: path.replace(/\\/g, "/"),
    description,
    creator: req.user.id,
  });
  req.user.images.push(newImage.id);
  req.user.save();
  res.redirect(routes.imageDetail(newImage.id));
};

// 이미지 페이지
export const imageDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const image = await Image.findById(id) //위에서 params로 얻은 id
      .populate("creator")
      .populate("comments");
    res.render("imageDetail", { pageTitle: "ImageDetail", image });
  } catch (error) {
    res.redirect(routes.home);
  }
};

//이미지 게시물 수정 페이지
export const getEditImage = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const image = await Image.findById(id);
    if (String(image.creator) !== req.user.id) {
      throw Error();
    } else {
      res.render("editImage", { pageTitle: "edit Image", image });
    }
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
    const image = await Image.findById(id);
    if (String(image.creator) !== req.user.id) {
      throw Error();
    } else {
      await Image.findOneAndRemove({ _id: id });
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

// 좋아요 기능
export const postRegisterLike = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const image = await Image.findById(id);
    image.views += 1;
    image.save();
    res.status(200);
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

// 댓글 달기
export const postAddComment = async (req, res) => {
  const {
    params: { id },
    body: { comment },
    user,
  } = req;
  try {
    const image = await Image.findById(id);
    const newComment = await Comment.create({
      text: comment,
      creator: user.id,
    });
    image.comments.push(newComment._id);
    image.save();
    res.send(JSON.stringify(newComment));
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

// 댓글 삭제
export const postDeleteComment = async (req, res) => {
  const {
    params: { id },
    user,
  } = req;
  try {
    const comment = await Comment.findById(id);
    if (String(comment.creator) !== user.id) {
      throw Error();
    } else {
      await Comment.findOneAndRemove({ _id: id });
    }
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};
