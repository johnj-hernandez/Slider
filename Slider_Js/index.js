// variable que contiene las direcciones de las imagenes del slider
var imagenes = ["images/colombin.jpg", "images/1.png", "images/2.jpg"];
// el contador de la imagen actual en el slider
var cont = 0;
// obtenemos el elemento slider e invocamos a la funcion slider donde internamente se le agregara su
// event listener y se procesara la logica tras el slider
var contenedor = document.querySelector(".slider");
slider(contenedor);

function slider(contenedor) {
  // ponemos al slider a la escucha del evento click
  contenedor.addEventListener("click", e => {
    //   dentro de la funcion invocada al generarse el evento click:
    // primero obtenemos los elementos como la imagen
    let next = document.querySelector(".next");
    let img = document.querySelector("img");
    // en la variable target almacenaremos el elemento sobre el cual se hizo click para distinguir a que boton se le hizo
    let target = e.target;
    // si se le hizo click al boton anterior:
    if (target.classList.contains("previous")) {
      // si el contador es mayor a 0 simplemente tomamos la imagen anterior en el arreglo y disminuimos el contador
      if (cont > 0) {
        img.src = imagenes[cont - 1];
        cont--;
      } else {
        // si ya se esta en la primera imagen cambiamos a la ultima imagen
        img.src = imagenes[imagenes.length - 1];
        cont = imagenes.length - 1;
      }
      // si se le hizo click al boton siguiente:
    } else if (target.classList.contains("next")) {
      // si no nos encontramos al final de la lista de imagenes simplemente avanzamos en las imagenes del arreglo y se le da el cambio al atributo SRC de el elemento imagen leido con anterioridad
      if (cont < imagenes.length - 1) {
        img.src = imagenes[cont + 1];
        cont++;
        // si estamos en la ultima imagen simplemente cambiamos a la primera imagen
      } else {
        img.src = imagenes[0];
        cont = 0;
      }
    }
  });
}
