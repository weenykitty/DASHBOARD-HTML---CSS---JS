const ball = document.querySelector(".ball");

if (localStorage.getItem("DARKMODE")) {
  ball.classList.add("ball-move");
  document.body.classList.add("darkmode");
}

ball.addEventListener("click", () => {
  if (localStorage.getItem("DARKMODE")) {
    ball.classList.remove("ball-move");
    document.body.classList.remove("darkmode");
    localStorage.removeItem("DARKMODE");
  }
  else {
    ball.classList.add("ball-move");
    document.body.classList.add("darkmode");
    localStorage.setItem("DARKMODE", true);
  }
});