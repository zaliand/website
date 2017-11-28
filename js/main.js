function registrarse(event){
	event.preventDefault();

	var minombre = document.getElementById("nombre").value;
	var miapellido = document.getElementById("apellido").value;

	var radios = document.getElementsByName('gender');
	
	for (var i = 0; i < radios.length; i++) {
		 if (radios[i].checked){
		  // do whatever you want with the checked radio
		  // only one radio can be logically checked, don't check the rest
		 }
	}
	obtenerProfesion();
}


function obtenerProfesion(){
	 var x = document.getElementById("profesion").value;
	 console.log("valor", x);
}
