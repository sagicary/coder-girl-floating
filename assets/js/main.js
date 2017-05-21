function inscribete(){
	var uno=document.getElementById('cambiarmensaje');
	uno.innerHTML=("Se parte de ellas!");
}

function hackaton(){
	document.getElementById('imagenhack').style.cssFloat = "right";
}

function contacto(){
	var name = document.getElementById('nombre').value;
	if (primeraMay(name)!=name){
		alert("Debe ingresar la primera letra en mayusculas");
	}else if (name==""){
		alert("No debe dejar campos en blanco");
	}else{
		var mail = document.getElementById('mail').value;
		if (validarMail(mail)){
			alert("Debes ingresar un correo valido");
		}else if (mail==""){
			alert("No debe dejar campos en blanco");
		}else{
			var asunto=document.getElementById('asunto').value;
			if (asunto==""){
				alert("No debe dejar campos en blanco");
			}else{
				var mensaje=document.getElementById('mensaje').value;
				if(mensaje.length>100)
				{
					alert("El mensaje debe contener menos de 100 caracteres");
				}else if(mensaje==""){
					alert("No debe dejar campos en blanco");
				}else{
					alert ("Datos ingresados correctamente");
					document.getElementById('formulario').reset();
				}
			}
		}
	}
}

function primeraMay(nombre){
	return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

function validarMail(correo){
	var expres=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
	if (!expres.test(correo)){
		return true;
	}
}