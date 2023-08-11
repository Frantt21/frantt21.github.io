var toggle = document.getElementById('contenedor');
var body = document.querySelector('body');
var boton = document.getElementById('toggle');
var titulo = document.getElementById('titulo1')
var parrafo = document.getElementById('parrafo')
var parrafo2 = document.getElementById('parrafo2')
var parrafo3 = document.getElementById('parrafo3')
var parrafo4 = document.getElementById('parrafo4')
var parrafo5 = document.getElementById('parrafo5')

toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    boton.classList.toggle('active');
    titulo.classList.toggle('active')
    parrafo.classList.toggle('active')
    parrafo2.classList.toggle('active')
    parrafo3.classList.toggle('active')
    parrafo4.classList.toggle('active')
    parrafo5.classList.toggle('active')
}


