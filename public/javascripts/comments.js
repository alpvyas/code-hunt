const makeComments = async (videoId, comments, userId) => {
  const commentSection = document.querySelector(".comments");
  commentSection.innerHTML = "";
  comments.forEach(async (e, i) => {
    let commentBox = document.createElement("div");
    commentBox.setAttribute("class", "commentBox");
    let newComment = document.createElement("p");
    newComment.setAttribute("class", "commentText");
    newComment.innerText = e.body;
    let userName = document.createElement("p");
    userName.setAttribute("class", "authorText");
    let time = e.createdAt.split("T");
    let date = time[0];
    time = time[1].split(":");
    time = `${time[0]}:${time[1]}`;
    userName.innerText = `by: ${e.User.username} at ${time} ${date}`;
    newComment.appendChild(userName);
    if (e.User.id === userId) {
      let deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
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
    commentBox.appendChild(newComment);
    commentSection.appendChild(commentBox);
  });
};
window.addEventListener("DOMContentLoaded", async () => {
  const link = document.querySelector(".videoLink");
  let video = link.id;
  if (video.startsWith("www")) {
    video = `https://${video}`;
    link.setAttribute("href", `${video}`);
  } else if (video.startsWith("https://")) {
    link.setAttribute("href", `${video}`);
  } else {
    video = `https://www.${video}`;
    link.setAttribute("href", `${video}`);
  }
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
