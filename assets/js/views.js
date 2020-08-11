const image = document.querySelector(".image-box");

const registerLike = () => {
  const imageId = window.location.href.split("/images/")[1];
  fetch(`/api/${imageId}/view`, {
    method: "POST",
  });
};

if (image) {
  registerLike();
}
