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