

const deleteButtons = document.querySelectorAll('.delete-logo');
const mylinks = document.querySelector(".links-container")

deleteButtons.forEach((button) => {

  button.addEventListener('click', async (event) => {
    const postId = parseInt(event.target.id, 10);
    const link = await fetch(`/posts/${postId}/delete`, { method: "DELETE" })
    const linkdiv = document.getElementById(`mylinks${event.target.id}`);
    mylinks.removeChild(linkdiv);
    // link = await link.json();  
    // return link;    
  })
});