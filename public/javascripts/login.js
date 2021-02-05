const registerTab = document.querySelector(".register-tab");
const loginTab = document.querySelector(".login-tab");

const registerForm = document.getElementById("register");
const loginForm = document.getElementById("login");

const errorDisplay = document.querySelector(".error-display");
const demoBtn = document.querySelector(".demoBtn");

registerTab.addEventListener("click", () => {
  if (loginForm.classList === "hidden") {
    
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    errorDisplay.classList.remove("hidden");
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
  } else {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    errorDisplay.classList.add("hidden");
    loginTab.classList.remove("active");
    registerTab.classList.add("active");
  }
});

loginTab.addEventListener("click", () => {
  if (registerForm.classList === "hidden") {
    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    errorDisplay.classList.remove("hidden");
    loginTab.classList.remove("active");
    registerTab.classList.add("active");
  } else {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    errorDisplay.classList.add("hidden");
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
  }
});
