var link = document.querySelector(".button-feedback-1");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".close-button");
var name = popup.querySelector("[name=feedback-name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=feedback-email]");
var message = popup.querySelector("[name=feedback-message]");
var storage = localStorage.getItem("name");
var body = document.querySelector("body");

link.addEventListener("click", function (evt) {
  evt.preventDefault();

  popup.classList.add("modal-show");
  body.classList.add("fixed");
      
  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");

  body.classList.remove("fixed");
  name.focus();
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.offsetWidth = popup.offsetWidth;
  } else {
    localStorage.setItem("name", name.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");

      body.classList.remove("fixed");
    }
  }
});