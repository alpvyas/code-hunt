

const deleteButton = document.querySelector('.delete-logo');


deleteButton.addEventListener('click', async (event) => {
  const postId = parseInt(event.target.id, 10);
  const link = await fetch(`/posts/${postId}/delete`, { method: "DELETE" })
  link = await link.json();  
  // return link;    
})