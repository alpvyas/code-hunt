const registerTab = document.querySelector(".register-tab");
const loginTab = document.querySelector(".login-tab");

const registerForm = document.getElementById("register");
const loginForm = document.getElementById("login");

const errorDisplay = document.querySelector(".error-display");


registerTab.addEventListener("click", () => {
  if (loginForm.classList === "hidden"){
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    errorDisplay.classList.remove("hidden");
  } else {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    errorDisplay.classList.add("hidden");
  }
});

loginTab.addEventListener("click", () => {
  if (registerForm.classList === "hidden"){
    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    errorDisplay.classList.remove("hidden");
  } else {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    errorDisplay.classList.add("hidden");
  }
});

