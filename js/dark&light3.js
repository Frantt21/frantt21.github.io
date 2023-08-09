var toggle = document.getElementById('contenedor');
var body = document.querySelector('body');
var boton = document.getElementById('toggle');
var texto = document.getElementById('texto1')
var titulo = document.getElementById('titulo1')
var banner = document.getElementById('contenedor-banner')

toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    boton.classList.toggle('active');
    texto.classList.toggle('active')
    titulo.classList.toggle('active')
    banner.classList.toggle('active')
}


// Obtener los elementos del HTML
var video = document.getElementById("video"); // El elemento de video
var div = document.getElementById("contenedor"); // El elemento de div que funciona como botón

// Definir las fuentes de los videos
var video1 = "../assets/videos/video.mp4"; // La fuente del primer video
var video2 = "../assets/videos/video2.mp4"; // La fuente del segundo video

// Definir una variable para guardar el estado del botón
var estado = 0; // 0 significa que se muestra el primer video, 1 significa que se muestra el segundo video

// Definir una función para cambiar el video cuando se hace clic en el div
function cambiarVideo() {
  // Si el estado es 0, cambiar a mostrar el segundo video
  if (estado == 0) {
    video.src = video2; // Cambiar la fuente del video al segundo video
    estado = 1; // Cambiar el estado a 1
  }
  // Si el estado es 1, cambiar a mostrar el primer video
  else if (estado == 1) {
    video.src = video1; // Cambiar la fuente del video al primer video
    estado = 0; // Cambiar el estado a 0
  }
}

// Agregar un evento al div para que llame a la función cuando se hace clic
div.addEventListener("click", cambiarVideo);


