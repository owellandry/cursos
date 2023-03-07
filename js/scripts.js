var redireccion = "/app/anonyfeelcourses.apk";

	var qrcode = new QRCode("qrcode", {
	  backgroundAlpha: 0
	});
	qrcode.makeCode(redireccion);
	
	setInterval(function() {
	  var tiempoActual = new Date().getTime();
	  var url = redireccion + "?t=" + tiempoActual;
	  qrcode.makeCode(url);
	}, 7000);
	
	qrcode._el.onclick = function() {
	  window.location.href = redireccion;
	};
	

	// Definimos la contraseña deseada
const password = 'miContraseña';

// Función para solicitar la contraseña al usuario
function solicitarContraseña() {
  const contraseñaIngresada = prompt("Ingrese la contraseña para acceder:");

  if (contraseñaIngresada === password) {
    // Si la contraseña ingresada es correcta, permitimos el acceso
    alert("Contraseña correcta. Bienvenido.");
  } else {
    // Si la contraseña ingresada es incorrecta, volvemos a solicitarla
    alert("Contraseña incorrecta. Intente nuevamente.");
    solicitarContraseña();
  }
}

// Llamamos a la función al cargar la página
window.onload = solicitarContraseña;
