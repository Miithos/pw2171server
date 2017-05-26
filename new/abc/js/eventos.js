// $ = jquery - son equvalentes

var iniciaApp = function(){
	// alert("Hola App :D");

	//Funcionalidad
	var valida = function(){
		//Obtener datos
		var usuario = $("#txtUsuario").val();
		var clave   = $("#txtClave").val();
		
		var parametros = "opcion=valida"+
		                 "&usuario="+usuario+
		                 "&clave="+clave;
		
		//Validamos que no esten vacíos
		if(usuario!="" && clave!="")
		{
			//Hacemos la petición remota
			$.ajax({
				cache:false,
				type:"POST",
				url: "php/datos.php",
				dataType:"json",
				data:parametros,
				success: function(response){
					if(response.respuesta == true){    
						$("#datosUsuario").hide("slow");
						$("nav").show("slow"); 
					}
					else{
						alert("Usuario y/o contraseña incorrectos");
					}
				},
				error: function(xhr,ajaxOptions,thrownError){
					alert("Error");
				}
			});
		}
		else{
			alert("Usuario y clave necesarios");
		}
	}

	var Alta = function()
	{
		//alert("Error");
		$("h2").html("Alta de usuarios");
		$("#artUsuario").show("slow");
		$("#txtUsuarioNombre").show();
		$("#extras").show();
		//Escondo todos los botones
		//contenidos en artAltaUsuarios
		$("#artUsuario > button").hide();
		$("#btnGuardaUsuario").show();
		$("#artConsultas").hide("slow");
	}

	var GuardaUsuario = function()
	{
		event.preventDefault();
		//Código para guardar usuario.
		//Recuperamos los valores del formulario y los
		//ponemos en variables locales.
		var usuario = $("#txtUsuarioNombre").val(); 
		var nombre  = $("#txtNombre").val();
		var clave   = $("#txtClaveNombre").val();
		var departamento    = $("#txtDept").val();
		var vigencia    = $("#txtVigencia").val();
		if(usuario!="" && nombre!="" && clave!="" && departamento!="" && vigencia!="")
		{
			//Parámetros para el ajax
			var parametros = "opcion=guarda"+
							 "&usuario="+usuario+
							 "&nombre="+nombre+
							 "&clave="+clave+
							 "&departamento="+departamento+
							 "&vigencia="+vigencia;


							 
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url:"php/datos.php",
				data:parametros,
				success:function(response){
					if(response.respuesta == true)
					{
						alert("Usuario registrado");
						$("#artUsuario > input").val("");
						$("#extras > input").val("");  
					}
					else
						alert("Usuario no registrado y/o duplicado");
				},
				error:function(xhr,ajaxOptions,thrownError){
					alert("No se pudo conectar al servidor");
				}
			});
		}
		else
			alert("Todos los campos son obligatorios");

	}

	var BajaUsuario = function()
	{
		
		//Código para guardar usuario.
		//Recuperamos los valores del formulario y los
		//ponemos en variables locales.
		var usuario = $("#txtUsuarioNombre").val(); 
		
		
		if(usuario!="" )
		{

			//Parámetros para el ajax
			var parametros = "opcion=baja"+
							 "&usuario="+usuario;
							 
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url:"php/datos.php",
				data:parametros,
				success:function(response){
					if(response.respuesta == true)
					{
						alert("Usuario borrado");
						$("#artUsuario > input").val(""); 
					}
					else
						alert("Usuario no registrado");
				},
				error:function(xhr,ajaxOptions,thrownError){
					console.log("No se pudo conectar al servidor");
				}
			});
		}
		else
			alert("Todos los campos son obligatorios");

	}


	var CambiosUsuario = function()
	{
		var usuario = $("#txtUsuarioNombre").val(); 
		
		
		if(usuario!="" )
		{

			//Parámetros para el ajax
			var parametros = "opcion=busca"+
							 "&usuario="+usuario;
							 
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url:"php/datos.php",
				data:parametros,
				success:function(response){
					if(response.respuesta == true)
					{
						$("h2").html("Cambiar datos");
						$("#artUsuario").show("slow");
						$("#txtUsuarioNombre").show();
						$("#extras").show();
						//Escondo todos los botones
						//contenidos en artAltaUsuarios
						$("#artUsuario > button").hide();
						$("#btnGuardarCambioUsuario").show();
					}
					else
						alert("Usuario no registrado");
				},
				error:function(xhr,ajaxOptions,thrownError){
					console.log("No se pudo conectar al servidor");
				}
			});
		}
		else
			alert("Todos los campos son obligatorios");
	

	}


	var GuardarCambiosUsuario = function()
	{
		event.preventDefault();
		//Código para guardar usuario.
		//Recuperamos los valores del formulario y los
		//ponemos en variables locales.
		var usuario = $("#txtUsuarioNombre").val(); 
		var nombre  = $("#txtNombre").val();
		var clave   = $("#txtClaveNombre").val();
		var departamento    = $("#txtDept").val();
		var vigencia    = $("#txtVigencia").val();
		if(usuario!="" && nombre!="" && clave!="" && departamento!="" && vigencia!="")
		{
			//Parámetros para el ajax
			var parametros = "opcion=update"+
							 "&usuario="+usuario+
							 "&nombre="+nombre+
							 "&clave="+clave+
							 "&departamento="+departamento+
							 "&vigencia="+vigencia;


							 
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url:"php/datos.php",
				data:parametros,
				success:function(response){
					if(response.respuesta == true)
					{
						alert("Usuario actualizado");
						$("#artUsuario > input").val(""); 
						$("#extras > input").val(""); 
						Cambios();
						
					}
					else
						alert("Usuario no actualizado");
				},
				error:function(xhr,ajaxOptions,thrownError){
					alert("No se pudo conectar al servidor");
				}
			});
		}
		else
			alert("Todos los campos son obligatorios");

	}

	var Baja = function()
	{
		$("h2").html("Baja de usuarios");
		$("#artUsuario").show("slow");
		$("#txtUsuarioNombre").show();
		$("#extras").hide();
		//Escondo todos los botones
		//contenidos en artAltaUsuarios
		$("#artUsuario > button").hide();
		$("#btnBajaUsuario").show();
		$("#artConsultas").hide("slow");
	}

	var Cambios = function()
	{
		$("h2").html("Cambiar los datos del usuario");
		$("#artUsuario").show("slow");
		$("#txtUsuarioNombre").show();
		$("#extras").hide();
		//Escondo todos los botones
		//contenidos en artAltaUsuarios
		$("#artUsuario > button").hide();
		$("#btnCambioUsuario").show();
		$("#artConsultas").hide("slow");
	}

	var Inicio = function()
	{
		$("#artUsuario").show("slow");
		$("h2").html("Bienvenido");
		$("#txtUsuarioNombre").hide("slow");
		$("#extras").hide();
		//Escondo todos los botones
		//contenidos en artAltaUsuarios
		$("#artUsuario > button").hide();
		$("#artConsultas").hide("slow");
		
	}

	var Consulta = function(){
		
		var parametros="opcion=consultas";
		
		$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/datos.php",
			data:parametros,
			success:function(response){
				$("#artUsuario").hide("slow");
				$("#tablaConsultas").html(response.renglones);
				$("#artConsultas").show("slow");
			},
			error:function(xhr,ajaxOptions,thrownError){
					alert("No se pudo conectar al servidor");
			}
		});
	}


	var teclaUsuario = function(tecla){
		if(tecla.which==13){
			$("#txtClave").focus();
		}
	}
	var teclaClave = function(tecla){
		if(tecla.which==13){
			valida();
		}
	}

	//Sección de declaración de eventos
	$("#btnEntrar").on("click",valida);
	$("#txtUsuario").on("keypress", teclaUsuario);
	$("#txtClave").on("keypress", teclaClave);
	$("#btnAltas").on("click",Alta);
	$("#btnGuardaUsuario").on("click",GuardaUsuario);
	$("#btnBajas").on("click",Baja);
	$("#btnInicio").on("click",Inicio);
	$("#btnBajaUsuario").on("click",BajaUsuario);
	$("#btnCambios").on("click",Cambios);
	$("#btnCambioUsuario").on("click",CambiosUsuario);
	$("#btnGuardarCambioUsuario").on("click",GuardarCambiosUsuario);
	$("#btnConsultas").on("click",Consulta);

}

$(document).ready(iniciaApp);