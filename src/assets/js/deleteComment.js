import axios from "axios";

const commentNum = document.querySelector("#jsCommentNumber");
const commentList = document.querySelector("#jsCommentList");
const comment = document.querySelectorAll("#jsComment");

const decreaseNumber = () => {
  commentNum.innerHTML = parseInt(commentNum.innerHTML, 10) - 1;
};

const deleteComment = (id, target) => {
  const span = target.parentElement;
  const li = span.parentElement;
  commentList.removeChild(li);
  decreaseNumber();
};

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

const addEvent = () => {
  comment.forEach(function (el) {
    const delBtn = el.childNodes[1];
    delBtn.addEventListener("click", handleClick);
  });
};

function init() {
  addEvent();
}

if (comment) {
  init();
}
