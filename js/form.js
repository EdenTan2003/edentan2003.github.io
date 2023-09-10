let message = document.querySelector("#message");

function setMsg(msg) {
  message.innerHTML = msg;
}

function removeMsg() {
  setMsg("");
}

let user_rating = document.querySelector("#rating_input");
let show_rating = document.querySelector("#show_rating");

setMsg("Thank You for the feedback :)");

user_rating.addEventListener("input", function (i) {
  show_rating.innerHTML = `(${i.target.value})`;
  if (i.target.value >= 7) {
    setMsg("Wow, Thank You So Much :)");
  } else if (i.target.value > 4 && i.target.value <= 6) {
    setMsg("Thank You for the feedback :)");
  } else {
    setMsg("Thank You, I will do better next time :)");
  }
});

user_rating.addEventListener("focus", () => {
  removeMsg();
});
