//Hola este archivo es el JS general




//Abrir el header xd
fetch("componentes/header.html")
  .then(response => {
    if (!response.ok) {
      throw new Error("No se pudo cargar el header");
    }

    return response.text();
  })
  .then(header => {
    document.querySelector("#header-container").innerHTML = header;
  })
  .catch(error => {
    console.error(error);
  });



  //Aparir de aqui voy a poner todos las demas fuciones de JS, de preferencia solo hay que usar un Archivo JS para mas simplicidad 
const openBtn = document.getElementById("Open-Modal");
const closeBtn = document.getElementById("Close-Modal");
const modal = document.getElementById("Modal");

openBtn.addEventListener("click", () => {
  modal.classList.add("Open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("Open");
});




const modelos = [
    "assets/GorraPiratas.glb",
    "assets/GorraTigres.glb",
    "assets/GorraPericos.glb",
    "assets/GorraOlmecas.glb",
    "assets/GorraLeones.glb",
    "assets/GorraGuerreros.glb",
    "assets/GorraElAguila.glb",
    "assets/GorraDiablos.glb",
    "assets/GorraConspiradores.glb",
    "assets/GorraBravos.glb",
    "assets/Silla-de-angel-para-AR.glb",
    "assets/resetVectorsv2.glb",
];

let modeloActual = 0;

function cambiarModelo() {
    const modelViewer = document.getElementById("miModelo");

    let nuevoModelo;

    do {
        nuevoModelo = Math.floor(Math.random() * modelos.length);
    } while (nuevoModelo === modeloActual && modelos.length > 1);

    modeloActual = nuevoModelo;

    modelViewer.src = modelos[modeloActual];
}
