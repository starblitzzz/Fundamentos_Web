//productos DB
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

const reg = document.getElementById("reg");
const ant = document.getElementById("ant");
const sig = document.getElementById("sig");
const campos = document.getElementsByTagName("<td>");
const codigos = document.getElementsByClassName("codigo");
const nombres = document.getElementsByClassName("nombre");
const categorias = document.getElementsByClassName("categoria");
const precios = document.getElementsByClassName("precio");
const stock = document.getElementsByClassName("stock");
const materiales = document.getElementsByClassName("material");
const garantias = document.getElementsByClassName("garantia");
const filtros = document.getElementsByClassName("campos");
const buscador = document.getElementById("buscar");
const name = document.getElementById("name");
const cat = document.getElementById("cat");
const mat = document.getElementById("mat");
const cleaner = document.getElementById("clean");
const filter = document.getElementById("filter");

function buscar() {
  let inde = 0;
  if (name.value == "" && cat.value == "" && mat.value == "") {
    for (let i = 0; i < productos.length; i++) {
      codigos[inde].innerHTML = productos[i].codigo;
      nombres[inde].innerHTML = productos[i].nombre;
      categorias[inde].innerHTML = productos[i].categoria;
      precios[inde].innerHTML = "$" + productos[i].precio;
      stock[inde].innerHTML = productos[i].stock;
      materiales[inde].innerHTML = productos[i].material;
      garantias[inde].innerHTML = productos[i].garantia;
      inde++;
    }
  } else {
    let index = 0;
    for (let i = 0; i < productos.length; i++) {
      if (
        name.value === productos[i].nombre ||
        cat.value === productos[i].categoria ||
        mat.value === productos[i].material
      ) {
        codigos[index].innerHTML = productos[i].codigo;
        nombres[index].innerHTML = productos[i].nombre;
        categorias[index].innerHTML = productos[i].categoria;
        stock[index].innerHTML = productos[i].stock;
        materiales[index].innerHTML = productos[i].material;
        garantias[index].innerHTML = productos[i].garantia;
        index++;
      }
    }
  }
}
function limpiar() {
  for (let i = 0; i < filtros.length; i++) {
    filtros[i].value = "";
  }

  for (let j = 0; j < codigos.length; j++) {
    codigos[j].innerHTML = "";
    nombres[j].innerHTML = "";
    categorias[j].innerHTML = "";
    stock[j].innerHTML = "";
    materiales[j].innerHTML = "";
    garantias[j].innerHTML = "";
  }
}

cleaner.addEventListener("click", () => {
  limpiar();
});

filter.addEventListener("click", () => {
  buscar();
});

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
  ant.style.backgroundImage = "url()";
});

ant.addEventListener("mouseout", () => {});

ant.addEventListener("click", () => {});
