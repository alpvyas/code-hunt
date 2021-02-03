const makeComments = async (videoId, comments) => {
  const commentSection = document.querySelector(".comments");
  commentSection.innerHTML = "";
  comments.forEach(async (e, i) => {
    let newComment = document.createElement("p");
    newComment.innerText = e.body;
    let userName = document.createElement("p");
    userName.innerText = `by: ${e.User.username}`;
    newComment.appendChild(userName);
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "delete comment";
    deleteButton.setAttribute("class", `${e.userId}`);
    deleteButton.setAttribute("id", `${e.id}`);
    deleteButton.addEventListener("click", async (event) => {
      const vidId = document.querySelector(".videoId").id;
      event.preventDefault();
      let result = await fetch(
        `/api/posts/${vidId}/comments/${event.target.id}/delete`,
        {
          method: "DELETE",
          // headers: {
          //   "Content-Type": "application/json",
          // },
        }
      );
      result = await result.json();
      await makeComments(vidId, result.comments);
    });
    newComment.appendChild(deleteButton);
    commentSection.appendChild(newComment);
  });
};
window.addEventListener("DOMContentLoaded", async () => {
  const videoId = document.querySelector(".videoId").id;
  let comments = await fetch(`/api/posts/${videoId}/comments`);
  comments = await comments.json();
  comments = comments.comments;
  await makeComments(videoId, comments);
});
document
  .querySelector(".comment-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const videoId = document.querySelector(".videoId").id;
    let commentBody = document.querySelector("#commentBody");
    let result = await fetch(`/api/posts/${videoId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: commentBody.value }),
    });
    result = await result.json();
    if (result.errors) {
      result.errors.forEach((e) => {
        window.alert(e);
      });
    } else {
      commentBody.innerHTML = "";
      await makeComments(videoId, result.comments);
    }
  });
