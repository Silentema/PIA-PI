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



  //Aparir de aqui voy a poner todos las demas fuciones de JS, de preferencia solo hay que usar un Archivo JS para mas simplicidad 
const openBtn = document.getElementById("Open-Modal");
const closeBtn = document.getElementById("Close-Modal");
const modal = document.getElementById("Modal");

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

const Quizdata = [
  {
    question: "Cual era el primer nombre de los Bravos?",
    a: "Jaguares",
    b: "Perricos",
    c: "Cachorros",
    correct: "c"
  },
  
   {
    question: "Por que obtuvieron los Conspiradores ese nombre?",
    a: "Por El Porfiriato",
    b: "Por la Conspiración de 1810",
    c: "Por La Revolucion Mexicana",
    correct: "b"
  },

   {
    question: "Cuantos títulos tienen los diablos rojos?",
    a: "20 titulos",
    b: "16 titulos",
    c: "17 titulos",
    correct: "b"
  },

   {
    question: "Empresario que creo el equipo del Aguila de Veracruz a base de su compañía petrolera?",
    a: "German Larrea",
    b: "Sir Weetman Peterson",
    c: "Carlos Slim",
    correct: "b"
  },

   {
    question: "Ano en el que obtuvieron su único campeonato los Guerreros de Oaxaca?",
    a: "2021",
    b: "1998",
    c: "1962",
    correct: "b"
  }
]
let modeloActual = 0;
let currentQuiz = 0;
let score= 0;
let timerleft= 60;
let timer;
let shuffuledquizdata= [];
let isQuizStarted=false;
let startime;
const questionEL = document.getElementById('Titulo-de-pregunta');
const a_text= document.getElementById('a_text');
const b_text= document.getElementById('b_text');
const c_text= document.getElementById('c_text');
const submitBtn= document.getElementById('enviar');
const answer= document.querySelectorAll('.answer');
const quizBody = document.querySelector('.pregunta');
const resultContainer = document.querySelector('.Victoria');
const finalScoreEl = document.getElementById('final-score');
const RestartBtn = document.getElementById('Siguiente');
const CurrentQuestion= document.getElementById('current');
const TotalQuestions= document.getElementById('total');
const Score= document.getElementById('score');
const Time= document.getElementById('time');
const StartBtn= document.getElementById('Empezar');
const quizHeader= document.querySelector('.InfoTest');
const startscreen = document.getElementById('Pantalla-de-Bienvenida');
const completitionTime = document.getElementById('completition-time');




function cambiarModelo() {
    const modelViewer = document.getElementById("miModelo");

    let nuevoModelo;

    do {
        nuevoModelo = Math.floor(Math.random() * modelos.length);
    } while (nuevoModelo === modeloActual && modelos.length > 1);

    modeloActual = nuevoModelo;

    modelViewer.src = modelos[modeloActual];
}

function shuffleQuestions(){
  shuffuledquizdata=[...Quizdata].sort(() => Math.random()-0.5);
}

function loadquiz(){
  if(!isQuizStarted) return;
  deselectanswers();
  const CurrentQuizdata= shuffuledquizdata[currentQuiz];
  questionEL.innerText= CurrentQuizdata.question;
  a_text.innerText = CurrentQuizdata.a;
  b_text.innerText = CurrentQuizdata.b;
  c_text.innerText = CurrentQuizdata.c;
  CurrentQuestion.innerText = currentQuiz + 1;
  TotalQuestions.innerText = shuffuledquizdata.length;
}

function startTimer(){
  startime= Date.now();
  timer = setInterval(() => {
    timerleft--;
    Time.innerText = timerleft;
    if(timerleft<=0){
      endQuiz();
    }
  }, 1000)
}

function deselectanswers(){
  answer.forEach(answer => answer.checked=false)
}

function getselected(){
  let Onswer;
  answer.forEach(Onswer => {
    if (answer.checked){
      Onswer = answer.id;
    }
  });
  return Onswer;
}

function endQuiz(){
  clearInterval(timer);
  quizBody.classList.add("hide");
  quizHeader.classList.add("hide");
  resultContainer.classList.remove("hide");
  finalScoreEl.innerText = score;
  const TimeTaken =Math.floor((Date.now-startime)/1000);
  completitionTime.innerText = TimeTaken;
}

if (submitBtn && RestartBtn && StartBtn) {
submitBtn.addEventListener("click", () => {
  const answer = getselected();
  if(answer){
    if(answer === shuffuledquizdata[currentQuiz].correct){
      score+=10;
      Score.innerText = score;
    }
    currentQuiz++;
    if(currentQuiz < shuffuledquizdata.length){
      loadquiz();
    }
    else{
      endQuiz();
    }
  }
})

RestartBtn.addEventListener("click", ()=>{
  currentQuiz=0;
  score=0;
  timerleft= 60;
  Score.innerText= score;
  Time.innerText = timerleft;
    quizBody.classList.add("hide");
  quizHeader.classList.add("hide");
  resultContainer.classList.remove("hide");
  isQuizStarted= false;
})

StartBtn.addEventListener("click", ()=>{
  console.log("Botón empezar presionado");
  startscreen.classList.add("hide");
  quizBody.classList.remove("hide");
  quizHeader.classList.remove("hide");
  resultContainer.classList.add("hide");
  isQuizStarted= true;
  shuffleQuestions();
  loadquiz();
  startTimer();
})
}

