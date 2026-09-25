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

// Como este JS es general y se comparte entre páginas, algunas no tienen
// el modal. Sin este "if" el script truena en esas páginas y nada de lo
// que sigue abajo se ejecuta.
if (openBtn && closeBtn && modal) {
  openBtn.addEventListener("click", () => {
    modal.classList.add("Open");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("Open");
  });
}




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
    if (!modelViewer) return; // esta página no tiene el model-viewer

    let nuevoModelo;

    do {
        nuevoModelo = Math.floor(Math.random() * modelos.length);
    } while (nuevoModelo === modeloActual && modelos.length > 1);

    modeloActual = nuevoModelo;

    modelViewer.src = modelos[modeloActual];
}

// - - - - - TRIVIA - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// - - - - - PREGUNTAS
const equipos = [
  {
    nombre: "Leones de Yucatán", // - - - - - LEONES DE YUCATÁN
    preguntas: [
      {pregunta: "Año de fundación de los Leones de Yucatán",
        opciones: ["1960", "1954", "1957"],
        correcta: "1954"},
      {pregunta: "¿De dónde viene el nombre 'Leones'?",
        opciones: ["De una cervecera", "Por un parque", "Por un León real"],
        correcta: "De una cervecera"},
      {pregunta: "¿Cuál fue el resultado de su partido debut?",
        opciones: ["Victoria 8-0 contra los Tecolotes de Nuevo Laredo", "Derrota 1-5 contra los Olmecas de Tabasco", "Victoria 4-0 contra los Sultanes de Monterrey"],
        correcta: "Victoria 8-0 contra los Tecolotes de Nuevo Laredo"},
      {pregunta: "¿Cuál es el apodo de su afición?",
        opciones: ["Los Reyes", "Los Felinos", "Los Melenudos"],
        correcta: "Los Melenudos"},
      {pregunta: "¿Cuál es el apodo de su estadio 'Kukulcán Álamo'?",
        opciones: ["La Guarida", "La Cueva", "La Sabana"],
        correcta: "La Cueva"}
      ]
  },

  {
    nombre: "Olmecas de Tabasco", // - - - - - OLMECAS DE TABASCO
    preguntas: [
      {pregunta: "Año de fundación de los Olmecas de Tabasco",
        opciones: ["1970", "1975", "1982"],
        correcta: "1975"},
      {pregunta: "¿En qué ciudad tienen su sede los Olmecas de Tabasco?",
        opciones: ["Villahermosa", "Cárdenas", "Comalcalco"],
        correcta: "Villahermosa"},
      {pregunta: "¿Cuál es el apodo de los Olmecas de Tabasco?",
        opciones: ["Los Cabezones", "Los Chocos", "Los Jaguares"],
        correcta: "Los Cabezones"},
      {pregunta: "¿En qué año obtuvieron su único título?",
        opciones: ["1990", "1993", "1997"],
        correcta: "1993"},
      {pregunta: "¿Cuál fue uno de los nombres antiguos del equipo?",
        opciones: ["Cardenales", "Guerreros", "Petroleros"],
        correcta: "Cardenales"}
      ]
  },

  {
    nombre: "Pericos de Puebla", // - - - - - PERICOS DE PUEBLA
    preguntas: [
      {pregunta: "Año de fundación de los Pericos de Puebla",
        opciones: ["1938", "1942", "1947"],
        correcta: "1942"},
      {pregunta: "¿Cuál es el estadio de los Pericos de Puebla?",
        opciones: ["Estadio Hermanos Serdán", "Estadio Cuauhtémoc", "Estadio Zaragoza"],
        correcta: "Estadio Hermanos Serdán"},
      {pregunta: "¿Cómo se llama la mascota de los Pericos de Puebla?",
        opciones: ["Panchito el perico", "Pepe el perico", "Paco el perico"],
        correcta: "Pepe el perico"},
      {pregunta: "¿En qué año obtuvieron su último título?",
        opciones: ["2018", "2021", "2023"],
        correcta: "2023"},
      {pregunta: "¿Qué otro nombre llegó a tener la franquicia?",
        opciones: ["Ángeles Negros", "Águilas Blancas", "Halcones de Puebla"],
        correcta: "Ángeles Negros"}
    ]
  },

  {
    nombre: "Piratas de Campeche", // - - - - - PIRATAS DE CAMPECHE
    preguntas: [
      {pregunta: "Año de fundación de los Piratas de Campeche",
        opciones: ["1976", "1980", "1984"],
        correcta: "1980"},
      {pregunta: "¿Qué franquicia heredaron para su fundación?",
        opciones: ["Alacranes de Durango", "Mineros de Zacatecas", "Algodoneros de Unión Laguna"],
        correcta: "Alacranes de Durango"},
      {pregunta: "¿Cómo se llama la mascota inspirada en un pirata holandés?",
        opciones: ["Lorencillo", "Barbanegra", "El Corsario"],
        correcta: "Lorencillo"},
      {pregunta: "¿Cuál es su sonido para celebrar batazos o carreras importantes?",
        opciones: ["Una campana", "Un cañón", "Una sirena"],
        correcta: "Un cañón"},
      {pregunta: "¿Qué parte de la ciudad está arraigada a su identidad?",
        opciones: ["Sus murallas", "Su malecón", "Sus plazas"],
        correcta: "Sus murallas"}
    ]
  },

  {
    nombre: "Tigres de Quintana Roo", // - - - - - TIGRES DE QUINTANA ROO
    preguntas: [
      {pregunta: "Año de fundación de los Tigres de Quintana Roo",
        opciones: ["1955", "1958", "1962"],
        correcta: "1955"},
      {pregunta: "¿Cuál es el lema de los Tigres de Quintana Roo?",
        opciones: ["El equipo que nació campeón", "El orgullo de Quintana Roo", "Siempre campeones"],
        correcta: "El equipo que nació campeón"},
      {pregunta: "¿Cuántos títulos de la LMB tienen?",
        opciones: ["10", "12", "14"],
        correcta: "12"},
      {pregunta: "¿En qué ciudad se originó el equipo?",
        opciones: ["Cancún", "Ciudad de México", "Puebla"],
        correcta: "Ciudad de México"},
      {pregunta: "¿En qué ciudad se encuentra actualmente el equipo?",
        opciones: ["Chetumal", "Playa del Carmen", "Cancún"],
        correcta: "Cancún"}
    ]
  },

  {
    nombre: "Bravos de León", // - - - - - BRAVOS DE LEÓN
    preguntas: [
      {pregunta: "¿Cuál era el primer nombre de los Bravos?",
        opciones: ["Cachorros de León", "Leones de León", "Tigres de León"],
        correcta: "Cachorros de León"},
      {pregunta: "¿Cuál de estos jugadores es un receptor?",
        opciones: ["Ángel López", "Jaime Orozco", "Jack Pierce"],
        correcta: "Ángel López"},
      {pregunta: "¿Cuándo fue su primer campeonato?",
        opciones: ["Septiembre de 1988", "Septiembre de 1990", "Septiembre de 1992"],
        correcta: "Septiembre de 1990"},
      {pregunta: "¿Qué jugador rompió, en 1986, un récord establecido por Héctor Espino?",
        opciones: ["Jack Pierce", "Roberto Vizcarra", "Wilie Aikens"],
        correcta: "Jack Pierce"},
      {pregunta: "¿Dónde juegan actualmente los Bravos?",
        opciones: ["Estadio Domingo Santa Ana", "Estadio Hermanos Serdán", "Estadio Kukulcán Álamo"],
        correcta: "Estadio Domingo Santa Ana"}
    ]
  },

  {
    nombre: "Conspiradores de Querétaro", // - - - - - CONSPIRADORES DE QUERÉTARO
    preguntas: [
      {pregunta: "¿En qué año se fundó el equipo?",
        opciones: ["2020", "2022", "2024"],
        correcta: "2022"},
      {pregunta: "¿Por qué obtuvieron ese nombre?",
        opciones: ["Por la Conspiración de 1810", "Por una batalla de 1821", "Por un movimiento de 1910"],
        correcta: "Por la Conspiración de 1810"},
      {pregunta: "¿Cuántos juegos ganaron durante la temporada 2024?",
        opciones: ["45 juegos", "50 juegos", "55 juegos"],
        correcta: "50 juegos"},
      {pregunta: "¿Cuál de estos jugadores es su receptor?",
        opciones: ["Daniel Sierra", "Carlos Paulino", "Rio Ruiz"],
        correcta: "Daniel Sierra"},
      {pregunta: "¿Contra quiénes jugaron por primera vez?",
        opciones: ["Tigres de Quintana Roo", "Diablos Rojos", "Guerreros de Oaxaca"],
        correcta: "Tigres de Quintana Roo"}
    ]
  },

  {
    nombre: "Diablos Rojos del México", // - - - - - DIABLOS ROJOS DEL MÉXICO
    preguntas: [
      {pregunta: "¿En qué año se fundó el equipo?",
        opciones: ["1935", "1940", "1945"],
        correcta: "1940"},
      {pregunta: "¿Cuántos títulos tienen?",
        opciones: ["14 títulos", "16 títulos", "18 títulos"],
        correcta: "16 títulos"},
      {pregunta: "¿Qué jugador legendario proveniente de este equipo posee muchos récords?",
        opciones: ["Alfredo Ortiz", "Alonso Perry", "Ramón Montoya"],
        correcta: "Alfredo Ortiz"},
      {pregunta: "¿Quién es el dueño del equipo que le da el nombre a su estadio actual?",
        opciones: ["Alfredo Harp Helú", "Miguel Ojeda", "Salomé Barojas"],
        correcta: "Alfredo Harp Helú"},
      {pregunta: "¿Qué manager les ayudó a ganar su primer premio en 1965?",
        opciones: ["Lázaro Salazar", "Alfredo Ortiz", "Ty Gainey"],
        correcta: "Lázaro Salazar"}
    ]
  },

  {
    nombre: "El Águila de Veracruz", // - - - - - EL ÁGUILA DE VERACRUZ
    preguntas: [
      {pregunta: "¿Qué empresario creó el equipo a base de su compañía petrolera?",
        opciones: ["Sir Weetman Pearson", "Alfredo Harp Helú", "Martín Dihigo"],
        correcta: "Sir Weetman Pearson"},
      {pregunta: "¿Quién lanzó el primer sin hit-sin carrera de su historia?",
        opciones: ["Martín Dihigo", "Humberto Sosa", "Al Pinkston"],
        correcta: "Martín Dihigo"},
      {pregunta: "¿En qué año se obtuvieron más cuadrangulares?",
        opciones: ["2001", "2005", "2010"],
        correcta: "2005"},
      {pregunta: "¿En qué año se fundó el equipo?",
        opciones: ["1920", "1925", "1930"],
        correcta: "1925"},
      {pregunta: "¿En qué año regresaron al Estadio Beto Ávila?",
        opciones: ["2019", "2021", "2023"],
        correcta: "2021"}
    ]
  },

  {
    nombre: "Guerreros de Oaxaca", // - - - - - GUERREROS DE OAXACA
    preguntas: [
      {pregunta: "¿Qué jugador produjo el récord de carreras producidas en 1997?",
        opciones: ["Nelson Barrera Romero", "Óscar Robles", "Carlos Rivera"],
        correcta: "Nelson Barrera Romero"},
      {pregunta: "¿En qué año obtuvieron su único campeonato?",
        opciones: ["1996", "1998", "2000"],
        correcta: "1998"},
      {pregunta: "¿Cuál de estos fue uno de sus jugadores destacados?",
        opciones: ["Óscar Robles", "Erick Rodríguez", "Jaime Brena"],
        correcta: "Óscar Robles"},
      {pregunta: "¿Quién propuso el nombre del equipo en un concurso?",
        opciones: ["Erasto Venegas", "Alfredo Ortiz", "Nelson Barrera Romero"],
        correcta: "Erasto Venegas"},
      {pregunta: "¿Quién fue su primer manager?",
        opciones: ["Alfredo “el Zurdo” Ortiz", "Óscar Robles", "Bárbaro Cañizares"],
        correcta: "Alfredo “el Zurdo” Ortiz"}
    ]
  }
];

const TOTAL_RONDAS = 5;
const PREGUNTAS_POR_RONDA = 10;
const TIEMPO_RONDA = 120;
const PUNTOS_POR_PREGUNTA = 100;
const PUNTOS_PARA_GANAR = 900;


// - - - - - ELEMENTOS DOM


const bienvenido   = document.querySelector(".Bienvenido");
const btnEmpezar   = document.getElementById("Empezar");

// Este JS es general y se comparte entre páginas; solo la página de la
// trivia tiene el botón "Empezar". Metemos toda la lógica de la trivia
// dentro de este "if" para que, en el resto de las páginas, el script
// no truene buscando elementos que ahí no existen.
if (btnEmpezar) {

  const infoTest     = document.querySelector(".InfoTest");
  const tituloInterior = document.querySelector(".titulo-interior");
  const contenedorPregunta = document.querySelector(".pregunta");
  const victoria     = document.querySelector(".Victoria");

  const spanActual   = document.getElementById("current");
  const spanTotal    = document.getElementById("total");
  const spanTiempo   = document.getElementById("time");
  const spanScore    = document.getElementById("score");

  const tituloPregunta = document.getElementById("Titulo-de-pregunta");
  const radios       = document.querySelectorAll(".answer");
  const btnEnviar    = document.getElementById("enviar");

  const tituloFinal  = document.querySelector(".titulo-Final");
  const finalScore   = document.getElementById("final-score");
  const tiempoFinal  = document.getElementById("completition-time");
  const btnSiguiente = document.getElementById("Siguiente");
  const btnMenu      = document.querySelector(".Menu1");

  // - - - - - PÁRRAFO EXTRA

  const resumenTotal = document.createElement("p"); //Se crea la etiqueta de párrafo
  resumenTotal.id = "resumen-total"; //Se le crea un ID
  victoria.insertBefore(resumenTotal, btnSiguiente); //Dentro de la clase victoria se agrega el párrafo creado, justo antes de btnSiguiente


  // - - - - - ESTADO DEL JUEGO

  let preguntasPorEquipo = [];
  let rondaActual = 1; // De 1 a 5
  let ronda = []; // Las 10 preguntas de cada ronda
  let preguntaActual = 1; // De 1 a 10
  let puntaje = 0; // Puntaje de la ronda
  let puntajeTotal = 0; // Puntaje acumulado entre todas las rondas
  let tiempoTotal = 0; // Tiempo acumulado entre todas las rondas
  let tiempoRestante = TIEMPO_RONDA;
  let intervalo = null; // Guardará el temporizador
  let rondaActiva = false;

  // - - - - - UTILIDADES

  function mezclar(arreglo) { // - - - - - Función para mezclar las preguntas
    const copia = [...arreglo]; // Se crea una copia del arreglo para no modificar el original
    // Algoritmo para mezclar elementos de forma aleatoria:
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  function mostrar(elemento, visible) { // - - - - - Función que recibe un elemento y un booleano para mostrarlo o esconderlo
    if (visible) {
      elemento.style.display = ""; // El "" hace que js no determine si se ve o no
    } else {
      elemento.style.display = "none"; // El "none" hace que js lo oculte
    }
  }

  // - - - - - PANTALLAS

  function mostrarMenu() { // Muestra mensaje de bienvenida y botón de empezar. Oculta la información del juego y los resultados
    detenerTimer();
    rondaActiva = false;
    mostrar(bienvenido, true);
    mostrar(btnEmpezar, true);
    mostrar(infoTest, false);
    mostrar(contenedorPregunta, false);
    mostrar(victoria, false);
  }

  function mostrarJuego() { // Oculta lo que se mostraba en el menú y muestra lo que estaba oculto
    mostrar(bienvenido, false);
    mostrar(btnEmpezar, false);
    mostrar(infoTest, true);
    mostrar(contenedorPregunta, true);
    mostrar(victoria, false);
  }

  function mostrarResultado(tiempoAgotado, tiempoUsado) { //recibe un booleano y un int
    const esUltimaRonda = rondaActual === TOTAL_RONDAS;

    mostrar(infoTest, false); // Se cambia a la pantalla de resultados
    mostrar(contenedorPregunta, false);
    mostrar(victoria, true);

    if (esUltimaRonda) {
      tituloFinal.textContent = "¡Trivia completada!"; // En caso de responder todas las preguntas
    } else if (tiempoAgotado) {
      tituloFinal.textContent = "¡Se acabó el tiempo!"; // En caso de que se termine el tiempo
    } else if (puntaje >= PUNTOS_PARA_GANAR) {
      tituloFinal.textContent = "¡Felicidades!"; // En caso de alcanzar el puntaje necesario para ganar
    } else {
      tituloFinal.textContent = "¡Buen intento!"; // En caso de no alcanzar los puntos necesarios
    }

    finalScore.textContent = puntaje;
    tiempoFinal.textContent = tiempoUsado;

    if (esUltimaRonda) {
      resumenTotal.textContent =
        `Puntuación Total: ${puntajeTotal}/${TOTAL_RONDAS * 1000}   ·   Tiempo total: ${tiempoTotal} segundos`; // Ejemplo: "Puntaje total: 4200/5000 · Tiempo total: 310 segundos"
      mostrar(btnSiguiente, false); // Se oculta el botón siguiente porque ya no quedan más rondas
    } else {
      resumenTotal.textContent =
        `Ronda ${rondaActual} de ${TOTAL_RONDAS}   ·   Puntuación Total: ${puntajeTotal} puntos`; // Ejemplo: "Ronda 2 de 5 · Acumulado: 1700 puntos"
      mostrar(btnSiguiente, true); // Se da la opción de seguir porque aún quedan rondas
    }
  }

  // - - - - - TEMPORIZADOR

  function iniciarTimer() {
    detenerTimer(); // Se asegura de que se detenga cualquier temporizador
    tiempoRestante = TIEMPO_RONDA;
    spanTiempo.textContent = tiempoRestante; // Se muestra el tiempo

    intervalo = setInterval(() => { // Se crea un temporizador
      tiempoRestante--; //Se resta un segundo
      spanTiempo.textContent = tiempoRestante; // Se actualiza el html con el tiempo actual

      if (tiempoRestante <= 0) { // Se verifica que no se haya acabado el tiempo
        terminarRonda(true);
      }
    }, 1000); //Se ejecuta cada segundo
  }

  function detenerTimer() {
    clearInterval(intervalo); // Detiene el temporizador
    intervalo = null; // Ya no hay ningún temporizador guardado en intervalo
  }

  // - - - - - LÓGICA DEL JUEGO

  function nuevaPartida() {
    preguntasPorEquipo = equipos.map((eq) => mezclar(eq.preguntas)); // Recorre el arreglo de equipos y mezcla las preguntas de cada uno
    rondaActual = 1;
    puntajeTotal = 0;
    tiempoTotal = 0;
    empezarRonda();
  }

  function siguienteRonda() {
    rondaActual++;
    empezarRonda();
  }

  function empezarRonda() {
    // 1 pregunta por equipo para esta ronda, en orden aleatorio.
    // rondaActual es 1 a 5, por eso restamos 1 para indexar el arreglo (0 a 4).
    ronda = mezclar(
      equipos.map((eq, i) => ({ ...preguntasPorEquipo[i][rondaActual - 1], equipo: eq.nombre })) // Recorre los equipos y va tomando las preguntas en la posición i para crear un arreglo con una pregunta de cada equipo
    );

    preguntaActual = 1; // Pregunta actual de la ronda (1 a 10)
    puntaje = 0; // Se reinicia el puntaje de la ronda
    rondaActiva = true;
    spanScore.textContent = puntaje; // Se muestra el nuevo puntaje (0)
    spanTotal.textContent = ronda.length; // Se muestra cuántas preguntas hay
    tituloInterior.textContent = `TRIVIA · RONDA ${rondaActual}/${TOTAL_RONDAS}`; // Se muestra el número de ronda

    mostrarJuego(); // Pantalla de juego
    cargarPregunta();
    iniciarTimer();
  }

  function cargarPregunta() {
    const p = ronda[preguntaActual - 1]; // Se obtiene la pregunta actual
    const opciones = mezclar(p.opciones); // Se mezclan las opciones

    spanActual.textContent = preguntaActual; // Se muestra el número de pregunta
    tituloPregunta.textContent = p.pregunta; // Texto de la pregunta

    radios.forEach((radio, i) => {
      document.getElementById(radio.id + "_text").textContent = opciones[i]; // Se busca el texto correspondiente
      radio.value = opciones[i]; // Se asigna el valor
      radio.checked = false; // Desmarca todas las opciones
    });
  }

  function enviarRespuesta() {
    const seleccionada = document.querySelector('input[name="answer"]:checked'); // Se obtiene la opción seleccionada

    if (!seleccionada) {
      alert("Elige una respuesta antes de enviar");
      return;
    }

    if (seleccionada.value === ronda[preguntaActual - 1].correcta) { // Si la respuesta es correcta
      puntaje += PUNTOS_POR_PREGUNTA; // Se incrementa el puntaje
      spanScore.textContent = puntaje; // Se actualiza el texto del puntaje
    }

    preguntaActual++; // Siguiente pregunta

    if (preguntaActual <= ronda.length) { // Se comprueba que aún queden preguntas
      cargarPregunta();
    } else {
      terminarRonda(false); // Es false porque solo es true si se acabó el tiempo
    }
  }

  function terminarRonda(tiempoAgotado) {
    if (!rondaActiva) return; // Si la ronda no está activa, no se hace nada para no sumar el puntaje y el tiempo dos veces
    rondaActiva = false;
    detenerTimer();

    const tiempoUsado = TIEMPO_RONDA - tiempoRestante;
    tiempoTotal += tiempoUsado;
    puntajeTotal += puntaje;

    mostrarResultado(tiempoAgotado, tiempoUsado); // Se indica si se agotó el tiempo con un booleano y se ingresa el tiempo usado
  }

  // - - - - - EVENTOS
  btnEmpezar.addEventListener("click", nuevaPartida);
  btnEnviar.addEventListener("click", enviarRespuesta);
  btnSiguiente.addEventListener("click", siguienteRonda);
  btnMenu.addEventListener("click", mostrarMenu);

  // - - - - - ARRANQUE
  mostrarMenu();
}

// SLIDER
const slides = document.querySelector(".slides");
const slideElements = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
let imagenActual = 0;

function actualizarDot() {
  dots.forEach((dot, indice) => {
    dot.classList.toggle("active", indice === imagenActual);
  });
}

function mostrarSlide(indice) {
  imagenActual = indice;

  slides.scrollTo({
    left: slides.clientWidth * imagenActual,
    behavior: "smooth"
  });

  actualizarDot();
}

if (slides && slideElements.length && dots.length && nextButton && previousButton) {
  nextButton.addEventListener("click", () => {
    mostrarSlide((imagenActual + 1) % slideElements.length);
  });

  previousButton.addEventListener("click", () => {
    mostrarSlide(
      (imagenActual - 1 + slideElements.length) % slideElements.length
    );
  });
}