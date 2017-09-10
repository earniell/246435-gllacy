

<script>

var link = document.querySelector(".button-feedback-1");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".close-button");
var login = popup.querySelector("[name=feedback-name]");
var form = popup.querySelector("feedback-form");
var email = popup.querySelector("[name=feedback-email]");
var message = popup.querySelector("[name=feedback-message]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    login.focus();
  });

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !message.value) {
      evt.preventDefault();
      console.log("Нужно заполнить все поля");
    } else {
      localStorage.setItem("login", login.value);
    }
  });
</script>
