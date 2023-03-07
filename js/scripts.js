var redireccion = "https://anonyapp.netlify.app/app/anonyfeelcourses.apk";

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