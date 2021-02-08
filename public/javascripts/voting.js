// const scoreHeading = document.querySelector('h1')
// const upvoteBtn = document.querySelector('#upvote')
// const downvoteBtn = document.querySelector('#downvote')

// // upvote.addEventListener('click', () => {
// //   const score = Number(scoreTotal.textContent)

// //   if(upvoteBtn.classList.contains('active')){
// //     upvote.classList.remove('active')
// //     scoreTotal.textContent = score - 1
// //   }else{
// //     upvote.classList.add('active')
// //     scoreTotal.textContent = score + 1
// //   }
// // })

// // const vote = type => {
// //   // if(type === 1) const button = upvoteBtn
// //   // if(type = -1) const button = downvoteBtn

// //   const button = { '1': upvoteBtn, '-1': downvoteBtn}

// //   const score = Number(scoreTotal.textContent)

// //   if(button[type].classList.contains('active')){
// //     score.textContent = (score - type).toString()
// //     button[type].classList.remove('active')
// //   }else if (button[-type].classList.contains('active')){
// //     scoreTotal.textContent = (score + 2 * type).toString()
// //     button[-type].classList.remove('active')
// //     button[type].classList.add('active')
// //   }else {
// //     scoreTotal.textContent = (score + type).toString()
// //     button[type].classList.add('active')
// //   }
// // }

// upvoteBtn.addEventListener('click', () => {
//   const score = Number(scoreHeading.textContent)
//   scoreHeading.textContent = score + 1
// })
// downvoteBtn.addEventListener('click', () => {
//   const score = Number(scoreHeading.textContent)
//   scoreHeading.textContent = score - 1
// })

const scoreHeading = document.querySelector("h1");
const upvoteButton = document.querySelector('#upvote');
const downvoteButton = document.querySelector("#downvote");

const vote = type => {
  const buttons = { "1": upvoteButton, "-1": downvoteButton };
  const score = Number(scoreHeading.textContent);

  if (buttons[type].classList.contains("active")) {
    scoreHeading.textContent = score - type;
    buttons[type].classList.remove("active");
  } else if (buttons[-type].classList.contains("active")) {
    scoreHeading.textContent = score + 2 * type;
    buttons[-type].classList.remove("active");
    buttons[type].classList.add("active");
  } else {
    scoreHeading.textContent = score + type;
    buttons[type].classList.add("active");
  }
};

upvoteButton.addEventListener("click", () => vote(1));
downvoteButton.addEventListener("click", () => vote(-1));
