import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");

const sendComment = async (comment) => {
  const imageId = window.location.href.split("/images/")[1];
  const response = await axios({
    url: `/api/${imageId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  console.log(response);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
  init();
}
