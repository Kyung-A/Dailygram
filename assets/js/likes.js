const likeBtn = document.getElementById("jsimageLike");
const likeNumber = document.getElementById("imageLikeNumber");

const upNumber = () => {
  likeNumber.innerHTML = parseInt(likeNumber.innerHTML, 10) + 1;
};

const registerLike = () => {
  const imageId = window.location.href.split("/images/")[1];
  fetch(`/api/${imageId}/view`, {
    method: "POST",
  });
};

function handleClick() {
  likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
  registerLike();
  upNumber();
}

function init() {
  likeBtn.addEventListener("click", handleClick, { once: true });
}

init();
