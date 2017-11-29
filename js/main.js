$( document ).ready(function(){
		$("#btn-registrarse").click(function(event){
			 event.preventDefault();

			var nombre = $('#nombre').val();
	   		var apellido = $('#apellido').val();
			var ciudad = $('#ciudad').val();
			var correo = $('#correo').val();

			var estado_civil = $("input[name='gender']:checked").val(); 
			var profesion = $("#profesion").val();

			console.log("el nombre es", nombre);
			console.log("el apellido es", apellido);
			console.log("el ciudad es", ciudad);
			console.log("el correo es", correo);
			console.log("el estado civil es", estado_civil);
			console.log("la profesion es", profesion);
		});
});