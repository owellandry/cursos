document.addEventListener("keydown", function(event) {
    // Verificar si la tecla presionada es "Print Screen"
    if (event.key === "PrintScreen" || event.key === "PrintScreen" || event.keyCode === 44) {
      // Evitar la acción por defecto de la tecla
      event.preventDefault();
      // Mostrar un mensaje de advertencia
      alert("La captura de pantalla está deshabilitada en esta página.");
    }
  });
  

  function enterFullScreen() {
    var el = document.documentElement;
    var rfs = el.requestFullscreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
    if (typeof rfs != "undefined" && rfs) {
      rfs.call(el);
    }
  }
  
  document.addEventListener("touchstart", enterFullScreen, false);
  