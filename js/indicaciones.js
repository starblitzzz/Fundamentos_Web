const red = document.getElementById("redirigir");

red.addEventListener("click", () => {
  window.location.href = "../index.html";
});

red.addEventListener("mouseover", () => {
  red.style.backgroundColor = "white";
  red.style.color = "#142157";
});

red.addEventListener("mouseout", () => {
  red.style.backgroundColor = "#142157";
  red.style.color = "white";
});
