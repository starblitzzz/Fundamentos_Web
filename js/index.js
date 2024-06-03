// import { productos } from "./data.js";
// import { images } from "./data.js";

//productos DB
const images = {
  img1: "https://motorkote.com.co/wp-content/uploads/2022/09/Motor-Diesel-1-768x514.png",
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
    imagen: images[0],
    stock: 50,
    material: "Sintético",
    garantia: "6 meses",
    precio: 50000,
  },
  {
    codigo: "Defgh678",
    nombre: "Pastillas frenos",
    categoria: "sistema de frenos",
    imagen: images[4],
    stock: 30,
    material: "Cerámica",
    garantia: "1 año",
    precio: 80000,
  },
  {
    codigo: "Ghi246ab",
    nombre: "Amortiguador Monroe",
    categoria: "sistema de suspensión",
    imagen: images[0],
    stock: 20,
    material: "Acero",
    garantia: "2 años",
    precio: 300000,
  },
  {
    codigo: "jKL13579",
    nombre: "Juego de llaves",
    categoria: "accesorios y herramientas",
    imagen: images[6],
    stock: 15,
    material: "Cromo vanadio",
    garantia: "1 año",
    precio: 150000,
  },
  {
    codigo: "mNO24681",
    nombre: "Filtro de aire Bosch",
    categoria: "motorización",
    imagen: images[0],
    stock: 40,
    material: "Papel y plástico",
    garantia: "6 meses",
    precio: 60000,
  },
  {
    codigo: "pQR13579",
    nombre: "Discos de frenos",
    categoria: "sistema de frenos",
    imagen: images[4],
    stock: 25,
    material: "Hierro fundido",
    garantia: "1 año",
    precio: 120000,
  },
  {
    codigo: "sTU02468",
    nombre: "suspensión deportiva",
    categoria: "sistema de suspensión",
    imagen: images[5],
    stock: 10,
    material: "Aluminio",
    garantia: "3 años",
    precio: 800000,
  },
  {
    codigo: "vWX35791",
    nombre: "Llantas 17 pulgadas",
    categoria: "ruedas y neumáticos",
    imagen: images[2],
    stock: 8,
    material: "Goma y aleación",
    garantia: "2 años",
    precio: 1000000,
  },
  {
    codigo: "yZA80246",
    nombre: "Equipo audio Pioneer",
    categoria: "electrónica y multimedia",
    imagen: images[7],
    stock: 12,
    material: "Plástico y metal",
    garantia: "1 año",
    precio: 500000,
  },
  {
    codigo: "bCD46802",
    nombre: "herramientas básicas",
    categoria: "accesorios y herramientas",
    imagen: images[6],
    stock: 20,
    material: "Acero al carbono",
    garantia: "1 año",
    precio: 200000,
  },
  {
    codigo: "aB123CDb",
    nombre: "herramientas pro",
    categoria: "accesorios y herramientas",
    imagen: images[6],
    stock: 20,
    material: "Acero inoxidable",
    garantia: "2 años",
    precio: 150000,
  },
  {
    codigo: "cD456EF8",
    nombre: "Llantas 18 pulgadas",
    categoria: "ruedas y neumáticos",
    imagen: images[2],
    stock: 15,
    material: "Aleación de aluminio",
    garantia: "1 año",
    precio: 1200000,
  },
  {
    codigo: "eF789GH8",
    nombre: "Filtro de aire",
    categoria: "motorización",
    imagen: images[0],
    stock: 30,
    material: "Fibra de carbono",
    garantia: "3 meses",
    precio: 80000,
  },
  {
    codigo: "gH012IJ8",
    nombre: "audio premium Bose",
    categoria: "electrónica y multimedia",
    imagen: images[7],
    stock: 10,
    material: "Plástico y metal",
    garantia: "2 años",
    precio: 1000000,
  },
  {
    codigo: "iJ345KL8",
    nombre: "Amortiguador trasero",
    categoria: "sistema de suspensión",
    imagen: images[5],
    stock: 25,
    material: "Aluminio",
    garantia: "5 años",
    precio: 400000,
  },
  {
    codigo: "kL678MN8",
    nombre: "frenos traseros",
    categoria: "sistema de frenos",
    imagen: images[4],
    stock: 20,
    material: "Cerámica reforzada",
    garantia: "1 año",
    precio: 90000,
  },
  {
    codigo: "mN901OP9",
    nombre: "Aceite sintético 10W",
    categoria: "motorización",
    imagen: images[0],
    stock: 40,
    material: "Sintético",
    garantia: "6 meses",
    precio: 60000,
  },
  {
    codigo: "oP234QR8",
    nombre: "llaves combinadas",
    categoria: "accesorios y herramientas",
    imagen: images[6],
    stock: 30,
    material: "Acero cromado",
    garantia: "1 año",
    precio: 70000,
  },
  {
    codigo: "qR567ST8",
    nombre: "Batería de arranque",
    categoria: "sistema eléctrico",
    imagen: images[1],
    stock: 15,
    material: "Plomo y fibra de vidrio",
    garantia: "2 años",
    precio: 300000,
  },
  {
    codigo: "sT890UV8",
    nombre: "Kit de luces LED",
    categoria: "Iluminación",
    imagen: images[8],
    stock: 20,
    material: "Plástico y metal",
    garantia: "1 año",
    precio: 120000,
  },
  {
    codigo: "Pqwe1234",
    nombre: "Llantas aleación",
    categoria: "ruedas y neumáticos",
    imagen: images[2],
    stock: 20,
    material: "Aleación aluminio",
    garantia: "1 año",
    precio: 1200000,
  },
  {
    codigo: "Pqwe5678",
    nombre: "Filtro aceite Fram",
    categoria: "motorización",
    imagen: images[0],
    stock: 50,
    material: "Fibra sintética",
    garantia: "6 meses",
    precio: 50000,
  },
  {
    codigo: "Pqwe9012",
    nombre: "Pastillas freno Brem",
    categoria: "sistema de frenos",
    imagen: images[4],
    stock: 30,
    material: "Compuesto cerámico",
    garantia: "1 año",
    precio: 80000,
  },
  {
    codigo: "Pqwe3456",
    nombre: "Kit suspensión depor",
    categoria: "sistema de suspensión",
    imagen: images[5],
    stock: 15,
    material: "Acero inoxidable",
    garantia: "2 años",
    precio: 2000000,
  },
  {
    codigo: "Pqwe6789",
    nombre: "Equipo audio Sony",
    categoria: "electrónica y multimedia",
    imagen: images[7],
    stock: 10,
    material: "Plástico y metal",
    garantia: "1 año",
    precio: 700000,
  },
  {
    codigo: "Pqwe7890",
    nombre: "herramientas Stanley",
    categoria: "accesorios y herramientas",
    imagen: images[6],
    stock: 25,
    material: "Acero al cromo vanadio",
    garantia: "3 años",
    precio: 250000,
  },
  {
    codigo: "Pqwe8901",
    nombre: "Batería coche Varta",
    categoria: "sistema eléctrico",
    imagen: images[1],
    stock: 20,
    material: "Plomo fibra vidrio",
    garantia: "2 años",
    precio: 350000,
  },
  {
    codigo: "Pqwe2345",
    nombre: "Kit luces LED inter",
    categoria: "Iluminación",
    imagen: images[8],
    stock: 30,
    material: "Plástico aluminio",
    garantia: "1 año",
    precio: 100000,
  },
  {
    codigo: "Pqwe3456",
    nombre: "Aceite motor Mobil 1",
    categoria: "motorización",
    imagen: images[0],
    stock: 40,
    material: "Sintético",
    garantia: "6 meses",
    precio: 80000,
  },
  {
    codigo: "Pqwe4567",
    nombre: "Llantas Michelin",
    categoria: "ruedas y neumáticos",
    imagen: images[2],
    stock: 15,
    material: "Caucho polímeros",
    garantia: "1 año",
    precio: 1500000,
  },
  {
    codigo: "ABc12345",
    nombre: "Llantas deportivas",
    categoria: "ruedas y neumáticos",
    imagen: images[2],
    stock: 20,
    material: "Aleación de aluminio",
    garantia: "1 año",
    precio: 1200000,
  },
  {
    codigo: "cDf67890",
    nombre: "Filtro de aceite",
    categoria: "motorización",
    imagen: images[0],
    stock: 50,
    material: "Fibra sintética",
    garantia: "6 meses",
    precio: 50000,
  },
  {
    codigo: "eFg24680",
    nombre: "Pastillas de freno Brembo",
    categoria: "sistema de frenos",
    imagen: images[4],
    stock: 30,
    material: "Compuesto cerámico",
    garantia: "1 año",
    precio: 80000,
  },
  {
    codigo: "gHh13579",
    nombre: "Kit de suspensión deportiva KW",
    categoria: "sistema de suspensión",
    imagen: images[5],
    stock: 15,
    material: "Acero inoxidable",
    garantia: "2 años",
    precio: 2000000,
  },
  {
    codigo: "iJi02468",
    nombre: "Equipo de audio Sony Bluetooth",
    categoria: "electrónica y multimedia",
    imagen: images[7],
    stock: 10,
    material: "Plástico y metal",
    garantia: "1 año",
    precio: 700000,
  },
  {
    codigo: "kLj35791",
    nombre: "Kit de herramientas Stanley",
    categoria: "accesorios y herramientas",
    imagen: images[6],
    stock: 25,
    material: "Acero al cromo vanadio",
    garantia: "3 años",
    precio: 250000,
  },
  {
    codigo: "mNk80246",
    nombre: "Batería de coche Varta AGM",
    categoria: "sistema eléctrico",
    imagen: images[1],
    stock: 20,
    material: "Plomo y fibra de vidrio",
    garantia: "2 años",
    precio: 350000,
  },
  {
    codigo: "oPl46802",
    nombre: "Kit de luces LED para interior",
    categoria: "Iluminación",
    imagen: images[8],
    stock: 30,
    material: "Plástico y aluminio",
    garantia: "1 año",
    precio: 100000,
  },
  {
    codigo: "qRm90123",
    nombre: "Aceite para motor Mobil 1",
    categoria: "motorización",
    imagen: images[0],
    stock: 40,
    material: "Sintético",
    garantia: "6 meses",
    precio: 80000,
  },
  {
    codigo: "sTn23456",
    nombre: "Llantas de invierno Michelin",
    categoria: "ruedas y neumáticos",
    imagen: images[2],
    stock: 15,
    material: "Caucho y polímeros",
    garantia: "1 año",
    precio: 1500000,
  },
  {
    codigo: "Pp0116Ab",
    nombre: "Lámparas LED H4",
    categoria: "Iluminación",
    imagen: images[8],
    stock: 25,
    material: "Plástico y aluminio",
    garantia: "1 año",
    precio: 80000,
  },
  {
    codigo: "P012i890",
    nombre: "Juego de bujías",
    categoria: "sistema electrico",
    imagen: images[1],
    stock: 20,
    material: "Cobre y silicona",
    garantia: "1 año",
    precio: 50000,
  },
  {
    codigo: "P013jkl9",
    nombre: "Limpiaparabrisas",
    categoria: "sistema de visibilidad",
    imagen: images[9],
    stock: 30,
    material: "Caucho y plástico",
    garantia: "6 meses",
    precio: 70000,
  },
  {
    codigo: "P014sdgs",
    nombre: "Alternador Denso",
    categoria: "sistema eléctrico",
    imagen: images[1],
    stock: 15,
    material: "Metal y cobre",
    garantia: "1 año",
    precio: 400000,
  },
  {
    codigo: "P015nbc6",
    nombre: "Líquido de frenos",
    categoria: "sistema de frenos",
    imagen: images[4],
    stock: 20,
    material: "Líquido hidráulico",
    garantia: "1 año",
    precio: 60000,
  },
  {
    codigo: "P016lkon",
    nombre: "transmisión ATF",
    categoria: "transmisión y embrague",
    imagen: images[10],
    stock: 20,
    material: "Sintético",
    garantia: "6 meses",
    precio: 90000,
  },
  {
    codigo: "P017drok",
    nombre: "combustible Mann",
    categoria: "motorización",
    imagen: images[0],
    stock: 25,
    material: "Papel y plástico",
    garantia: "6 meses",
    precio: 70000,
  },
  {
    codigo: "P018dfss",
    nombre: "Bobina de encendido",
    categoria: "sistema electrico",
    imagen: images[1],
    stock: 15,
    material: "Metal y plástico",
    garantia: "1 año",
    precio: 120000,
  },
  {
    codigo: "P019xbcn",
    nombre: "kit de pinchazos",
    categoria: "ruedas y neumaticos",
    imagen: images[2],
    stock: 30,
    material: "Plástico y caucho",
    garantia: "6 meses",
    precio: 50000,
  },
  {
    codigo: "P020ñosd",
    nombre: "Silenciador escape",
    categoria: "sistema de escape",
    imagen: images[3],
    stock: 10,
    material: "Acero inoxidable",
    garantia: "1 año",
    precio: 300000,
  },
];

const campos = document.getElementsByClassName("campos");
const clear = document.getElementById("limpiar");
// const preview = document.getElementById("preview");
const selector = document.getElementById("selector");
const name = document.getElementById("nombre");
const categoria = document.getElementById("categoria");
const codigo = document.getElementById("codigo");
const garantia = document.getElementById("garantia");
const cantidad = document.getElementById("cantidad");
const material = document.getElementById("material");
const registrar = document.getElementById("registrar");
const precio = document.getElementById("precio");
// const redireccion = document.getElementById("redirigir");

//codigo de la vista de registro
function registrarproducto() {
  const product = {
    codigo: codigo.value,
    nombre: name.value,
    categoria: categoria.value,
    imagen: imagenfun(),
    stock: cantidad.value,
    material: material.value,
    garantia: garantia.value,
    precio: precio.value,
  };

  productos.push(product);
  console.log(productos);
}

function nombre() {
  if (name.value.length > 20 || name.value.length < 3) {
    return false;
  } else {
    return true;
  }
}

function imagenfun() {
  const opc = selector.value;
  if (opc == "Motor") {
    return images.img1;
  }
  if (opc == "Electrico") {
    return images.img2;
  }
  if (opc == "Ruedas") {
    return images.img3;
  }
  if (opc == "Escape") {
    return images.img4;
  }
  if (opc == "Frenos") {
    return images.img5;
  }
  if (opc == "Suspension") {
    return images.img6;
  }
  if (opc == "Herramientas") {
    return images.img7;
  }
  if (opc == "Multimedia") {
    return images.img8;
  }
  if (opc == "Iluminacion") {
    return images.img9;
  }
  if (opc == "Vision") {
    return images.img10;
  }
  if (opc == "Transmision") {
    return images.img11;
  } else {
    return false;
  }
}

function cod() {
  const code = codigo.value;
  const numeros = code.match(/\d/g) || [];
  const mayusculas = code.match(/[A-Z]/g) || [];
  const minusculas = code.match(/[a-z]/g) || [];

  const cantidadnumeros = numeros.length;
  const cantidadmayusculas = mayusculas.length;
  const cantidadminusculas = minusculas.length;

  if (
    cantidadnumeros < 2 ||
    cantidadmayusculas < 1 ||
    cantidadminusculas < 1 ||
    code.length < 8 ||
    code.length > 10
  ) {
    return false;
  } else {
    return true;
  }
}

function validarCampos() {
  if (
    nombre() === false ||
    categoria.value.trim() === "" ||
    precio.value.length < 4 ||
    parseFloat(precio.value) < 1000 ||
    cod() === false ||
    garantia.value.trim() === "" ||
    selector.value.trim() === "" ||
    parseInt(cantidad.value) < 1 ||
    cantidad.value.trim() === "" ||
    material.value.trim() === ""
  ) {
    console.log("fallo");
    window.location.href = "./html/indicaciones.html";
    alert("Registro invalido :(");
  } else {
    console.log("gano");
    window.location.href = "./html/listado.html";
  }
}

registrar.addEventListener("click", (event) => {
  event.preventDefault();
  validarCampos();
});

selector.addEventListener("change", () => {
  const preview = document.getElementById("preview");
  const opc = selector.value;
  console.log(opc);
  if (opc == "Motor") {
    preview.setAttribute("src", images.img1);
  }
  if (opc == "Electrico") {
    preview.setAttribute("src", images.img2);
  }
  if (opc == 3) {
    preview.setAttribute("src", images.img3);
  }
  if (opc == 4) {
    preview.setAttribute("src", images.img4);
  }
  if (opc == 5) {
    preview.setAttribute("src", images.img5);
  }
  if (opc == 6) {
    preview.setAttribute("src", images.img6);
  }
  if (opc == 7) {
    preview.setAttribute("src", images.img7);
  }
  if (opc == 8) {
    preview.setAttribute("src", images.img8);
  }
  if (opc == 9) {
    preview.setAttribute("src", images.img9);
  }
  if (opc == 10) {
    preview.setAttribute("src", images.img10);
  }
  if (opc == 11) {
    preview.setAttribute("src", images.img11);
  } else {
    preview.setAttribute("src", "");
  }
});

name.addEventListener("mouseover", () => {
  name.style.border = " 1px solid #107acc";
});

name.addEventListener("mouseout", () => {
  name.style.border = " 1px solid blue";
});

categoria.addEventListener("mouseover", () => {
  categoria.style.border = " 1px solid #107acc";
});

categoria.addEventListener("mouseout", () => {
  categoria.style.border = " 1px solid blue";
});

codigo.addEventListener("mouseover", () => {
  codigo.style.border = " 1px solid #107acc";
});

codigo.addEventListener("mouseout", () => {
  codigo.style.border = " 1px solid blue";
});

garantia.addEventListener("mouseover", () => {
  garantia.style.border = " 1px solid #107acc";
});

garantia.addEventListener("mouseout", () => {
  garantia.style.border = " 1px solid blue";
});

cantidad.addEventListener("mouseover", () => {
  cantidad.style.border = " 1px solid #107acc";
});

cantidad.addEventListener("mouseout", () => {
  cantidad.style.border = " 1px solid blue";
});

material.addEventListener("mouseover", () => {
  material.style.border = " 1px solid #107acc";
});

material.addEventListener("mouseout", () => {
  material.style.border = " 1px solid blue";
});

precio.addEventListener("mouseover", () => {
  precio.style.border = " 1px solid #107acc";
});

precio.addEventListener("mouseout", () => {
  precio.style.border = " 1px solid blue";
});

clear.addEventListener("click", (event) => {
  event.preventDefault();
  clear.style.color = "white";
  clear.style.backgroundColor = "white";
  for (let i = 0; i < campos.length; i++) {
    campos[i].value = "";
  }
});

clear.addEventListener("mouseover", () => {
  clear.style.color = "gray";
  clear.style.backgroundColor = "white";
});

clear.addEventListener("mouseout", () => {
  clear.style.color = "white";
  clear.style.backgroundColor = "gray";
});

registrar.addEventListener("mouseover", () => {
  registrar.style.backgroundColor = "white";
  registrar.style.color = "#0cbccc";
});

registrar.addEventListener("mouseout", () => {
  registrar.style.backgroundColor = "#0cbccc";
  registrar.style.color = "white";
});

//

//codigo de la vista de indicaciones
// redireccion.addEventListener("click", (event) => {
//   console.log("ok");
//   event.preventDefault();
//   window.location.href = "./index.html";
// });
