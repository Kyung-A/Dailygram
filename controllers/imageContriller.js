export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const images = (req, res) => res.render("images");

export const imageDetail = (req, res) =>
  res.render("imageDetail", { pageTitle: "ImageDetail" });

export const deleteImage = (req, res) => res.render("deleteImage");

export const deleteComment = (req, res) => res.render("deleteComment");
