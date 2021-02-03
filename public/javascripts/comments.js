const commentDeleteForm = document.querySelector('.comment-delete-form');


const deleteComment = async (pid, cid) => {
  const route = `/api/posts/${pid}/comments/${cid}/delete`;
  const reqParams = {
    method: "DELETE",
  };
  const response = await fetch(route, reqParams);
  return response.json();
};

commentDeleteForm.addEventListener("click", (e) => {
  const deleteButton = e.target;
  const commentId = e.target.value;
  
})
