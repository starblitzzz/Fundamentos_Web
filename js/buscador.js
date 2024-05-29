const reg = document.getElementById("reg");
const ant = document.getElementById("ant");
const sig = document.getElementById("sig");

reg.addEventListener("mouseover", () => {
  reg.style.backgroundColor = "white";
});

reg.addEventListener("mouseout", () => {
  reg.style.backgroundColor = "#142157";
});

reg.addEventListener("click", () => {
  reg.style.backgroundColor = "#0cbccc";
  reg.style.border = "1px solid #0cbccc";
  window.location.href = "../html/listado.html";
});

ant.addEventListener("mouseover", () => {
    ant.style.backgroundImage="url()"
  });
  
  ant.addEventListener("mouseout", () => {
  });
  
  ant.addEventListener("click", () => {
  });
  
