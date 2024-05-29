const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const ant = document.getElementById("ant");
const sig = document.getElementById("sig");

//EVENTOS
b1.addEventListener("mouseover", () => {
  b1.style.backgroundColor = "white";
  b1.style.color = "#107acc";
});

b1.addEventListener("mouseout", () => {
  b1.style.backgroundColor = "#107acc";
  b1.style.color = "white";
});

b1.addEventListener("click", () => {
  b1.style.backgroundColor = "#142157";
  b1.style.color = "white";
  window.location.href = "../index.html";
});

b2.addEventListener("mouseover", () => {
  b2.style.backgroundColor = "white";
  b2.style.color = "#107acc";
});

b2.addEventListener("mouseout", () => {
  b2.style.backgroundColor = "#107acc";
  b2.style.color = "white";
});

b2.addEventListener("click", () => {
  b2.style.backgroundColor = "#142157";
  b2.style.color = "white";
  window.location.href = "../html/Buscador.html";
});

sig.addEventListener("mouseover", () => {
  sig.style.backgroundImage = "url(../images/fc2.png)";
});

sig.addEventListener("mouseout", () => {
  sig.style.backgroundImage = "url(../images/flechacorrecta.png)";
});

sig.addEventListener("click", () => {
  sig.style.backgroundImage = "url(../images/fc4.png)";
});

ant.addEventListener("mouseover", () => {
  ant.style.backgroundImage = "url(../images/fc3.png)";
});

ant.addEventListener("mouseout", () => {
  ant.style.backgroundImage = "url(../images/flechaant.png)";
});

ant.addEventListener("click", () => {
  ant.style.backgroundImage = "url(../images/fc5.png)";
});
