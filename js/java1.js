              // Función para crear un efecto de máquina de escribir
              function maquinaDeEscribir(texto, elemento, velocidad) {
                var i = 0;
                var intervalo = setInterval(function() {
                  if (i < texto.length) {
                    document.getElementById(elemento).innerHTML += texto.charAt(i);
                    i++;
                  } else {
                    clearInterval(intervalo);
                  }
                }, velocidad);
              }
          
              // Llamada a la función con el texto, el ID del elemento y la velocidad (en milisegundos)
              maquinaDeEscribir("No compartas tu informacion con nadie.", "titulo", 50);