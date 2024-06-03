const images = {
  img1: "./images/motorización.png",
  img2: "./images/sistemaelectrico.jpg",
  img3: "./images/rueda.jpg",
  img4: "./images/escape.jpg",
  img5: "./images/frenos.jpg",
  img6: "./images/suspension.jpg",
  img7: "./images/herramientas.jpg",
  img8: "./images/multimedia.jpg",
  img9: "./images/iluminación.jpg",
  img10: "./images/visibilidad.jpg",
  img11: "./images/transmision.jpg",
};

const productos = [
  {
    codigo: "AbCde123",
    nombre: "Aceite sintético",
    categoria: "motorización",
    imagen: images.img1,
    stock: 50,
    material: "Sintético",
    garantia: "6 meses",
    precio: 50000,
  },
  {
    codigo: "Defgh678",
    nombre: "Pastillas frenos",
    categoria: "sistema de frenos",
    imagen: images.img3,
    stock: 30,
    material: "Cerámica",
    garantia: "1 año",
    precio: 80000,
  },
  {
    codigo: "Ghi246ab",
    nombre: "Amortiguador Monroe",
    categoria: "sistema de suspensión",
    imagen: images.img1,
    stock: 20,
    material: "Acero",
    garantia: "2 años",
    precio: 300000,
  },
  {
    codigo: "jKL13579",
    nombre: "Juego de llaves",
    categoria: "accesorios y herramientas",
    imagen: images.img7,
    stock: 15,
    material: "Cromo vanadio",
    garantia: "1 año",
    precio: 150000,
  },
  {
    codigo: "mNO24681",
    nombre: "Filtro de aire Bosch",
    categoria: "motorización",
    imagen: images.img1,
    stock: 40,
    material: "Papel y plástico",
    garantia: "6 meses",
    precio: 60000,
  },
  {
    codigo: "pQR13579",
    nombre: "Discos de frenos",
    categoria: "sistema de frenos",
    imagen: images.img5,
    stock: 25,
    material: "Hierro fundido",
    garantia: "1 año",
    precio: 120000,
  },
  {
    codigo: "sTU02468",
    nombre: "suspensión deportiva",
    categoria: "sistema de suspensión",
    imagen: images.img6,
    stock: 10,
    material: "Aluminio",
    garantia: "3 años",
    precio: 800000,
  },
  {
    codigo: "vWX35791",
    nombre: "Llantas 17 pulgadas",
    categoria: "ruedas y neumáticos",
    imagen: images.img3,
    stock: 8,
    material: "Goma y aleación",
    garantia: "2 años",
    precio: 1000000,
  },
  {
    codigo: "yZA80246",
    nombre: "Equipo audio Pioneer",
    categoria: "electrónica y multimedia",
    imagen: images.img8,
    stock: 12,
    material: "Plástico y metal",
    garantia: "1 año",
    precio: 500000,
  },
  {
    codigo: "bCD46802",
    nombre: "herramientas básicas",
    categoria: "accesorios y herramientas",
    imagen: images.img7,
    stock: 20,
    material: "Acero al carbono",
    garantia: "1 año",
    precio: 200000,
  },
  {
    codigo: "aB123CDb",
    nombre: "herramientas pro",
    categoria: "accesorios y herramientas",
    imagen: images.img7,
    stock: 20,
    material: "Acero inoxidable",
    garantia: "2 años",
    precio: 150000,
  },
  {
    codigo: "cD456EF8",
    nombre: "Llantas 18 pulgadas",
    categoria: "ruedas y neumáticos",
    imagen: images.img3,
    stock: 15,
    material: "Aleación de aluminio",
    garantia: "1 año",
    precio: 1200000,
  },
  {
    codigo: "eF789GH8",
    nombre: "Filtro de aire",
    categoria: "motorización",
    imagen: images.img1,
    stock: 30,
    material: "Fibra de carbono",
    garantia: "3 meses",
    precio: 80000,
  },
  {
    codigo: "gH012IJ8",
    nombre: "audio premium Bose",
    categoria: "electrónica y multimedia",
    imagen: images.img8,
    stock: 10,
    material: "Plástico y metal",
    garantia: "2 años",
    precio: 1000000,
  },
  {
    codigo: "iJ345KL8",
    nombre: "Amortiguador trasero",
    categoria: "sistema de suspensión",
    imagen: images.img6,
    stock: 25,
    material: "Aluminio",
    garantia: "5 años",
    precio: 400000,
  },
  {
    codigo: "kL678MN8",
    nombre: "frenos traseros",
    categoria: "sistema de frenos",
    imagen: images.img5,
    stock: 20,
    material: "Cerámica reforzada",
    garantia: "1 año",
    precio: 90000,
  },
  {
    codigo: "mN901OP9",
    nombre: "Aceite sintético 10W",
    categoria: "motorización",
    imagen: images.img1,
    stock: 40,
    material: "Sintético",
    garantia: "6 meses",
    precio: 60000,
  },
  {
    codigo: "oP234QR8",
    nombre: "llaves combinadas",
    categoria: "accesorios y herramientas",
    imagen: images.img7,
    stock: 30,
    material: "Acero cromado",
    garantia: "1 año",
    precio: 70000,
  },
  {
    codigo: "qR567ST8",
    nombre: "Batería de arranque",
    categoria: "sistema eléctrico",
    imagen: images.img2,
    stock: 15,
    material: "Plomo y fibra de vidrio",
    garantia: "2 años",
    precio: 300000,
  },
  {
    codigo: "sT890UV8",
    nombre: "Kit de luces LED",
    categoria: "Iluminación",
    imagen: images.img9,
    stock: 20,
    material: "Plástico y metal",
    garantia: "1 año",
    precio: 120000,
  },
  {
    codigo: "Pqwe1234",
    nombre: "Llantas aleación",
    categoria: "ruedas y neumáticos",
    imagen: images.img3,
    stock: 20,
    material: "Aleación aluminio",
    garantia: "1 año",
    precio: 1200000,
  },
  {
    codigo: "Pqwe5678",
    nombre: "Filtro aceite Fram",
    categoria: "motorización",
    imagen: images.img1,
    stock: 50,
    material: "Fibra sintética",
    garantia: "6 meses",
    precio: 50000,
  },
  {
    codigo: "Pqwe9012",
    nombre: "Pastillas freno Brem",
    categoria: "sistema de frenos",
    imagen: images.img5,
    stock: 30,
    material: "Compuesto cerámico",
    garantia: "1 año",
    precio: 80000,
  },
  {
    codigo: "Pqwe3456",
    nombre: "Kit suspensión depor",
    categoria: "sistema de suspensión",
    imagen: images.img6,
    stock: 15,
    material: "Acero inoxidable",
    garantia: "2 años",
    precio: 2000000,
  },
  {
    codigo: "Pqwe6789",
    nombre: "Equipo audio Sony",
    categoria: "electrónica y multimedia",
    imagen: images.img8,
    stock: 10,
    material: "Plástico y metal",
    garantia: "1 año",
    precio: 700000,
  },
  {
    codigo: "Pqwe7890",
    nombre: "herramientas Stanley",
    categoria: "accesorios y herramientas",
    imagen: images.img7,
    stock: 25,
    material: "Acero al cromo vanadio",
    garantia: "3 años",
    precio: 250000,
  },
  {
    codigo: "Pqwe8901",
    nombre: "Batería coche Varta",
    categoria: "sistema eléctrico",
    imagen: images.img2,
    stock: 20,
    material: "Plomo fibra vidrio",
    garantia: "2 años",
    precio: 350000,
  },
  {
    codigo: "Pqwe2345",
    nombre: "Kit luces LED inter",
    categoria: "Iluminación",
    imagen: images.img9,
    stock: 30,
    material: "Plástico aluminio",
    garantia: "1 año",
    precio: 100000,
  },
  {
    codigo: "Pqwe3456",
    nombre: "Aceite motor Mobil 1",
    categoria: "motorización",
    imagen: images.img1,
    stock: 40,
    material: "Sintético",
    garantia: "6 meses",
    precio: 80000,
  },
  {
    codigo: "Pqwe4567",
    nombre: "Llantas Michelin",
    categoria: "ruedas y neumáticos",
    imagen: images.img3,
    stock: 15,
    material: "Caucho polímeros",
    garantia: "1 año",
    precio: 1500000,
  },
  {
    codigo: "ABc12345",
    nombre: "Llantas deportivas",
    categoria: "ruedas y neumáticos",
    imagen: images.img3,
    stock: 20,
    material: "Aleación de aluminio",
    garantia: "1 año",
    precio: 1200000,
  },
  {
    codigo: "cDf67890",
    nombre: "Filtro de aceite",
    categoria: "motorización",
    imagen: images.img1,
    stock: 50,
    material: "Fibra sintética",
    garantia: "6 meses",
    precio: 50000,
  },
  {
    codigo: "eFg24680",
    nombre: "Pastillas de freno Brembo",
    categoria: "sistema de frenos",
    imagen: images.img5,
    stock: 30,
    material: "Compuesto cerámico",
    garantia: "1 año",
    precio: 80000,
  },
  {
    codigo: "gHh13579",
    nombre: "Kit de suspensión deportiva KW",
    categoria: "sistema de suspensión",
    imagen: images.img6,
    stock: 15,
    material: "Acero inoxidable",
    garantia: "2 años",
    precio: 2000000,
  },
  {
    codigo: "iJi02468",
    nombre: "Equipo de audio Sony Bluetooth",
    categoria: "electrónica y multimedia",
    imagen: images.img8,
    stock: 10,
    material: "Plástico y metal",
    garantia: "1 año",
    precio: 700000,
  },
  {
    codigo: "kLj35791",
    nombre: "Kit de herramientas Stanley",
    categoria: "accesorios y herramientas",
    imagen: images.img7,
    stock: 25,
    material: "Acero al cromo vanadio",
    garantia: "3 años",
    precio: 250000,
  },
  {
    codigo: "mNk80246",
    nombre: "Batería de coche Varta AGM",
    categoria: "sistema eléctrico",
    imagen: images.img2,
    stock: 20,
    material: "Plomo y fibra de vidrio",
    garantia: "2 años",
    precio: 350000,
  },
  {
    codigo: "oPl46802",
    nombre: "Kit de luces LED para interior",
    categoria: "Iluminación",
    imagen: images.img9,
    stock: 30,
    material: "Plástico y aluminio",
    garantia: "1 año",
    precio: 100000,
  },
  {
    codigo: "qRm90123",
    nombre: "Aceite para motor Mobil 1",
    categoria: "motorización",
    imagen: images.img1,
    stock: 40,
    material: "Sintético",
    garantia: "6 meses",
    precio: 80000,
  },
  {
    codigo: "sTn23456",
    nombre: "Llantas de invierno Michelin",
    categoria: "ruedas y neumáticos",
    imagen: images.img3,
    stock: 15,
    material: "Caucho y polímeros",
    garantia: "1 año",
    precio: 1500000,
  },
  {
    codigo: "Pp0116Ab",
    nombre: "Lámparas LED H4",
    categoria: "Iluminación",
    imagen: images.img9,
    stock: 25,
    material: "Plástico y aluminio",
    garantia: "1 año",
    precio: 80000,
  },
  {
    codigo: "P012i890",
    nombre: "Juego de bujías",
    categoria: "sistema electrico",
    imagen: images.img2,
    stock: 20,
    material: "Cobre y silicona",
    garantia: "1 año",
    precio: 50000,
  },
  {
    codigo: "P013jkl9",
    nombre: "Limpiaparabrisas",
    categoria: "sistema de visibilidad",
    imagen: images.img10,
    stock: 30,
    material: "Caucho y plástico",
    garantia: "6 meses",
    precio: 70000,
  },
  {
    codigo: "P014sdgs",
    nombre: "Alternador Denso",
    categoria: "sistema eléctrico",
    imagen: images.img2,
    stock: 15,
    material: "Metal y cobre",
    garantia: "1 año",
    precio: 400000,
  },
  {
    codigo: "P015nbc6",
    nombre: "Líquido de frenos",
    categoria: "sistema de frenos",
    imagen: images.img5,
    stock: 20,
    material: "Líquido hidráulico",
    garantia: "1 año",
    precio: 60000,
  },
  {
    codigo: "P016lkon",
    nombre: "transmisión ATF",
    categoria: "transmisión y embrague",
    imagen: images.img11,
    stock: 20,
    material: "Sintético",
    garantia: "6 meses",
    precio: 90000,
  },
  {
    codigo: "P017drok",
    nombre: "combustible Mann",
    categoria: "motorización",
    imagen: images.img1,
    stock: 25,
    material: "Papel y plástico",
    garantia: "6 meses",
    precio: 70000,
  },
  {
    codigo: "P018dfss",
    nombre: "Bobina de encendido",
    categoria: "sistema electrico",
    imagen: images.img2,
    stock: 15,
    material: "Metal y plástico",
    garantia: "1 año",
    precio: 120000,
  },
  {
    codigo: "P019xbcn",
    nombre: "kit de pinchazos",
    categoria: "ruedas y neumaticos",
    imagen: images.img3,
    stock: 30,
    material: "Plástico y caucho",
    garantia: "6 meses",
    precio: 50000,
  },
  {
    codigo: "P020ñosd",
    nombre: "Silenciador escape",
    categoria: "sistema de escape",
    imagen: images.img4,
    stock: 10,
    material: "Acero inoxidable",
    garantia: "1 año",
    precio: 300000,
  },
];

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const ant = document.getElementById("ant");
const uno = document.getElementById("1");
const dos = document.getElementById("2");
const tres = document.getElementById("3");
const cuatro = document.getElementById("4");
const nombres = document.getElementsByClassName("nombre");
const codigos = document.getElementsByClassName("codigo");
const categorias = document.getElementsByClassName("categoria");
const precios = document.getElementsByClassName("precio");
const materiales = document.getElementsByClassName("material");
const stocks = document.getElementsByClassName("stock");
const preview = document.getElementsByClassName("preview");

//pagina1
for (let i = 0; i < productos.length; i++) {
  if (i < nombres.length) {
    preview[i].style.backgroundImage = "url(productos[i].imagen)";
    nombres[i].textContent = productos[i].nombre;
    codigos[i].textContent = productos[i].codigo;
    categorias[i].textContent = productos[i].categoria;
    precios[i].textContent = "$" + productos[i].precio;
    materiales[i].textContent = productos[i].material;
    stocks[i].textContent = productos[i].stock + " unidades";
  }
}

//funcion que organiza los elementos correspondientes a la pagina 2
function paginacion2() {
  let index = 0;
  for (let i = 15; i < productos.length && i <= 30; i++) {
    if (index < nombres.length) {
      // preview[index].style.backgroundImage = url(productos[i].imagen);
      nombres[index].textContent = productos[i].nombre;
      codigos[index].textContent = productos[i].codigo;
      categorias[index].textContent = productos[i].categoria;
      precios[index].textContent = "$" + productos[i].precio;
      materiales[index].textContent = productos[i].material;
      stocks[index].textContent = productos[i].stock + " unidades";
      index++;
    }
  }
}
//funcion que organiza los elementos correspondientes a la pagina 3
function paginacion3() {
  let index = 0;
  for (let i = 30; i < productos.length && i <= 45; i++) {
    if (index < nombres.length) {
      // preview[index].style.backgroundImage = url(productos[i].imagen);
      nombres[index].textContent = productos[i].nombre;
      codigos[index].textContent = productos[i].codigo;
      categorias[index].textContent = productos[i].categoria;
      precios[index].textContent = "$" + productos[i].precio;
      materiales[index].textContent = productos[i].material;
      stocks[index].textContent = productos[i].stock + " unidades";
      index++;
    }
  }
}
//funcion que organiza los elementos correspondientes a la pagina 4
function paginacion4() {
  let index = 0;
  for (let i = 45; i < productos.length && i <= 50; i++) {
    if (index < nombres.length) {
      // preview[index].style.backgroundImage = url(productos[i].imagen);
      nombres[index].textContent = productos[i].nombre;
      codigos[index].textContent = productos[i].codigo;
      categorias[index].textContent = productos[i].categoria;
      precios[index].textContent = "$" + productos[i].precio;
      materiales[index].textContent = productos[i].material;
      stocks[index].textContent = productos[i].stock + " unidades";
      index++;
    }
  }
}
uno.style.color = "#107acc";

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
  if ((uno.style.color = "#107acc")) {
    uno.style.color = "white";
    dos.style.color = "#107acc";
    paginacion2();
  } else if ((dos.style.color = "#107acc")) {
    dos.style.color = "white";
    tres.style.color = "#107acc";
    paginacion3();
  } else if ((tres.style.color = "#107acc")) {
    tres.style.color = "white";
    cuatro.style.color = "#107acc";
    paginacion4();
  }
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
