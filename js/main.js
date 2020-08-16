let logo = document.getElementById("logoLateral");
function cambiarLogo(char){
  logo.src = char;
}

// Cambiar el source del logo dependiendo de la sección
let secciones = document.querySelectorAll('div.secciones');
let letras = document.getElementsByClassName('letras');
let path = ["About", "Experiencia", "Servicios", "Contacto"];

for(let i=0; i<4; i++){
  secciones[i+1].addEventListener('mouseover', function(){cambiarLogo("./public/logo" + path[i] + ".png")});
  secciones[i+1].addEventListener('click', function(){cambiarLogo("./public/logo" + path[i] + ".png")});
  letras[i].addEventListener('click', function(){cambiarLogo("./public/logo" + path[i] + ".png")});
}
