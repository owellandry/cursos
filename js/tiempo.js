var ultimoTiempoActivo = Date.now();

document.addEventListener("mousemove", function() {
  ultimoTiempoActivo = Date.now();
});


function verificarInactividad() {
  var tiempoInactivo = Date.now() - ultimoTiempoActivo;
  if (tiempoInactivo > 20000) { // 20 segundos en milisegundos
    window.location.href = "/dist/inactivo.html"; // Aquí debes poner la URL de la página a la que deseas redirigir al usuario
  }
}

setInterval(verificarInactividad, 1000); // Verificar la inactividad cada segundo
