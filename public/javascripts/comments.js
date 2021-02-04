const makeComments = async (videoId, comments, userId) => {
  const commentSection = document.querySelector(".comments");
  commentSection.innerHTML = "";
  comments.forEach(async (e, i) => {
    let newComment = document.createElement("p");
    newComment.innerText = e.body;
    let userName = document.createElement("p");
    userName.innerText = `by: ${e.User.username}`;
    newComment.appendChild(userName);
    if (e.User.id === userId) {
      let deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete Comment";

      deleteButton.setAttribute("class", `deleteBtn ${e.userId}`);
      deleteButton.setAttribute("id", `${e.id}`);
      deleteButton.addEventListener("click", async (event) => {
        const vidId = document.querySelector(".videoId").id;
        event.preventDefault();
        let result = await fetch(
          `/api/posts/${vidId}/comments/${event.target.id}/delete`,
          {
            method: "DELETE",
          }
        );
        if (result.statusText === "Forbidden") {
          return window.alert("Cannot Delete other users' comments!");
        }
        result = await result.json();
        let id = result.userId;
        await makeComments(vidId, result.comments, id);
      });
      newComment.appendChild(deleteButton);
    }
    commentSection.appendChild(newComment);
  });
};
window.addEventListener("DOMContentLoaded", async () => {
  const videoId = document.querySelector(".videoId").id;
  let comments = await fetch(`/api/posts/${videoId}/comments`);
  comments = await comments.json();
  let id = comments.userId;
  comments = comments.comments;
  await makeComments(videoId, comments, id);
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
    let id = result.userId;
    if (result.errors) {
      result.errors.forEach((e) => {
        window.alert(e);
      });
    } else {
      commentBody.innerHTML = "";
      await makeComments(videoId, result.comments, id);
    }
  });
