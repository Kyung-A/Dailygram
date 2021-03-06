import axios from "axios";

window.onload = function () {
  const addCommentForm = document.getElementById("jsAddComment");
  const submitBtn = document.getElementById("jsSubmitBtn");
  const commentList = document.getElementById("jsCommentList");
  const commentNumber = document.getElementById("jsCommentNumber");

  const increaseNumber = () => {
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
  };

  const decreaseNumber = () => {
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
  };

  // 댓글 삭제
  const deleteComment = (id, target) => {
    const span = target.parentElement;
    const li = span.parentElement;
    commentList.removeChild(li);
    decreaseNumber();
  };

  // 댓글삭제
  const handleClick = async (event) => {
    const target = event.target;
    const commentId = target.id;
    const response = await axios({
      url: `/api/${commentId}/comment/delete`,
      method: "POST",
      data: {
        commentId,
      },
    });
    if (response.status === 200) {
      deleteComment(commentId, target);
    }
  };

  const addComment = (comment, commentID) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    span.innerHTML = comment;
    delBtn.id = String(commentID);
    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", handleClick);
    span.appendChild(delBtn);
    li.appendChild(span);
    commentList.prepend(li);
    increaseNumber();
  };

  const sendComment = async (comment) => {
    const imageId = window.location.href.split("/images/")[1];
    const response = await axios({
      url: `/api/${imageId}/comment`,
      method: "POST",
      data: {
        comment,
      },
    });
    if (response.status === 200) {
      addComment(comment, response.data._id);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const commentInput = addCommentForm.querySelector("input");
    const comment = commentInput.value;
    sendComment(comment);
    commentInput.value = "";
  };

  function init() {
    addCommentForm.addEventListener("submit", handleSubmit); // 오류 뜨는중
  }

  if (addCommentForm) {
    submitBtn.addEventListener("click", init());
  }

  // 좋아요 기능
  const likeBtn = document.getElementById("jsimageLike");
  const likeNumber = document.getElementById("imageLikeNumber");
  const likeWrap = document.getElementsByClassName("image-likes");

  const upNumber = () => {
    likeNumber.innerHTML = parseInt(likeNumber.innerHTML, 10) + 1;
  };

  const registerLike = () => {
    const imageId = window.location.href.split("/images/")[1];
    fetch(`/api/${imageId}/view`, {
      method: "POST",
    });
  };

  function handleClickBtn() {
    likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
    registerLike();
    upNumber();
  }

  function init02() {
    likeBtn.addEventListener("click", handleClickBtn, { once: true });
  }

  if (likeWrap) {
    init02();
  }
};
