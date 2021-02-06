const registerTab = document.querySelector(".regBtn");
const loginTab = document.querySelector(".loginBtn");

const registerForm = document.getElementById("register");
const loginForm = document.getElementById("login");

const errorDisplay = document.querySelector(".error-display");
window.addEventListener("DOMContentLoaded", (e) => {
  registerTab.addEventListener("click", () => {
    registerTab.removeAttribute("class");
    registerTab.setAttribute("class", "regBtn active");
    loginTab.removeAttribute("class");
    loginTab.setAttribute("class", "loginBtn");
    if (loginForm.classList === "hidden") {
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
    registerTab.removeAttribute("class");
    registerTab.setAttribute("class", "regBtn");
    loginTab.removeAttribute("class");
    loginTab.setAttribute("class", "loginBtn  active");
    if (registerForm.classList === "hidden") {
      registerForm.classList.remove("hidden");
      loginForm.classList.add("hidden");
      errorDisplay.classList.remove("hidden");
    } else {
      registerForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
      errorDisplay.classList.add("hidden");
    }
  });
});
