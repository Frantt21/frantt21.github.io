var toggle = document.getElementById('contenedor');
var body = document.querySelector('body');
var titulo = document.getElementById('titulo');
var boton = document.getElementById('toggle');
var formulario1 = document.getElementById('w1');
var formulario2 = document.getElementById('w2');
var formulario3 = document.getElementById('w3');
var frm4 = document.getElementById('linkr');
var frm6 = document.getElementById('linko');
var frm5 = document.getElementById('btni');
var olv = document.getElementById('olv');
var icon = document.getElementById('icono');
var icon2 = document.getElementById('icono2');
var texto1 = document.getElementById('texto1')

toggle.onclick = function(){
    toggle.classList.toggle('active');
    texto1.classList.toggle('active')
    body.classList.toggle('active');
    boton.classList.toggle('active');
    formulario1.classList.toggle('active');
    formulario2.classList.toggle('active');
    formulario3.classList.toggle('active');
    frm4.classList.toggle('active');
    frm5.classList.toggle('active');
    frm6.classList.toggle('active');
    icon.classList.toggle('active');
    icon2.classList.toggle('active');   
    titulo.classList.toggle('active');

}