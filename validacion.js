
 window.addEventListener('load', function(){
              
    //detectar cuando toco el boton de registro (se envía el formulario)
     var botonRegistro = document.getElementById("submit");
     botonRegistro.addEventListener('click',function(){
      
      //tomar los datos del formulario
        var nombre =document.getElementById("nombre");
        var email = document.getElementById("email");
        var telefono = document.getElementById("telefono");
        var provincias = document.querySelector("#prov");
        var fechaNacimiento = document.getElementById("fechaNacimiento");
        var sexoF = document.getElementById("femenino");
        var sexoM = document.getElementById("masculino");
        var pass = document.getElementById("password");
        var pass_confirm = document.getElementById("password_confirm")
        var errores = false;
        var expresion = /\w+@\w+\.+[a-z]/;
        var expresionTel = /^([0-9])*$/;

       //los span de errores del formulario 
        var errorNombre = document.querySelector("span.errorNombre");
        var errorEmail = document.querySelector("span.errorEmail");
        var errorTelefono = document.querySelector("span.errorTelefono");
        var errorProv = document.querySelector("span.errorProv");
        var errorFechaNacimiento = document.querySelector("span.errorFechaNac");
   
        var errorSexo = document.querySelector("span.errorSexo");
        var errorPass = document.querySelector("span.errorContrasenia");
   
      //por cada dato voy a validar
      //campo nombre
        if(nombre.value == ""){
            errorNombre.innerHTML = "El nombre es obligatorio.";
            nombre.style.border = "2px solid #ffa81c";
            errores = true;
        }else if (nombre.value.trim()== ""){
            errorNombre.innerHTML = "El nombre no puede tener espacios vacios.";
            nombre.style.border = "2px solid #ffa81c";
            errores = true;
        }else if(nombre.value.length < 3){
            errorNombre.innerHTML = "El nombre debe contener al menos 3 caracteres.";
            nombre.style.border = "2px solid #ffa81c";
            errores = true;
        }else if(nombre.value.length > 40){
            errorNombre.innerHTML = "La extensión del nombre no debe superar los 40 caracteres.";
            nombre.style.border = "2px solid #ffa81c";
            errores = true;
        }else{
            errorNombre.innerHTML = "";
            nombre.style.border = "2px solid #20db93";
          }
          //campo email
          if(email.value == ""){
            errorEmail.innerHTML = "El correo electrónico es obligatorio.";
            email.style.border = "2px solid #ffa81c";
            errores = true;
          }else if(email.value.length < 3){
            errorEmail.innerHTML = "El correo electrónico debe contener al menos 3 caracteres.";
            email.style.border = "2px solid #ffa81c";
            errores = true;
        }else if(email.value.length > 40){
            errorEmail.innerHTML = "La extensión del correo electrónico no debe superar los 40 caracteres.";
            email.style.border = "2px solid #ffa81c";
            errores = true;
        }else if(email.value.trim()== ""){
            errorEmail.innerHTML = "El correo electrónico no puede tener espacios vacios.";
            email.style.border = "2px solid #ffa81c";
            errores = true;
        }else if(!expresion.test(email.value)){
            errorEmail.innerHTML = "El formato no es válido";
            email.style.border = "2px solid #ffa81c";
            errores = true;
        }else{
            errorEmail.innerHTML = "";
            email.style.border = "2px solid #20db93";
          }
     
        
          //campo telefono
          if(telefono.value == ""){
            errorTelefono.innerHTML = "El teléfono es obligatorio.";
            telefono.style.border = "2px solid #ffa81c";
            errores = true;
          }else if(telefono.value.length < 8){
            errorTelefono.innerHTML = "El teléfono debe contener al menos 8 caracteres.";
            telefono.style.border = "2px solid #ffa81c";
            errores = true;
        }else if(telefono.value.length > 14){
            errorTelefono.innerHTML = "La extensión del teléfono no debe superar los 14 caracteres.";
            telefono.style.border = "2px solid #ffa81c";
            errores = true;
        }else if (telefono.value.trim()== ""){
            errorTelefono.innerHTML = "El teléfono no puede tener espacios vacios.";
            telefono.style.border = "2px solid #ffa81c";
            errores = true;
        }else if(!expresionTel.test(telefono.value)){
            errorTelefono.innerHTML = "El campo sólo acepta valores numéricos"
            telefono.style.border = "2px solid #ffa81c";
            errores = true;
        }else{
            errorTelefono.innerHTML = "";
            telefono.style.border = "2px solid #20db93";
        }
         
         


            //campo fecha nacimiento
     if (fechaNacimiento.value==""){
             errorFechaNacimiento.innerHTML = "Debe completar una fecha";
             fechaNacimiento.style.border = "2px solid #ffa81c";
         } else{
             errorFechaNacimiento.innerHTML = "";
             fechaNacimiento.style.border = "2px solid #20db93";
         }

         
            //campo sexo 
            if (sexoF.checked == true || sexoM.checked == true){
                errorSexo.innerHTML = "";
            }else{
                errorSexo.innerHTML = "Debe Seleccionar una opcion";
            }

            //campo password
        if(pass.value == ""){
        errorPass.innerHTML = "La contraseña es obligatoria.";
            pass.style.border = "2px solid #ffa81c";
            pass_confirm.style.border = "2px solid #ffa81c";
            errores = true;
            }else if(pass.value.length < 8){
            errorPass.innerHTML = "La contraseña debe contener al menos 8 caracteres.";
            pass.style.border = "2px solid #ffa81c";
            pass_confirm.style.border = "2px solid #ffa81c";
            errores = true;
        }else if(pass.value.length > 30){
            errorPass.innerHTML = "La extensión de la contraseña no debe superar los 30 caracteres.";
            pass.style.border = "2px solid #ffa81c";
            pass_confirm.style.border = "2px solid #ffa81c";
            errores = true;
        }else if (pass.value.trim()== ""){
            errorPass.innerHTML = "La contraseña no puede tener espacios vacios.";
            pass.style.border = "2px solid #ffa81c";
            pass_confirm.style.border = "2px solid #ffa81c";
            errores = true;
        }else if(pass.value != pass_confirm.value){
            errorPass.innerHTML = "Las contraseñas deben ser iguales.";
            pass.style.border = "2px solid #ffa81c";
            pass_confirm.style.border = "2px solid #ffa81c";
            errores = true;
        }else{
            errorPass.innerHTML = "";
            pass.style.border = "2px solid #20db93";
            pass_confirm.style.border = "2px solid #20db93";
        };
            
           //campo seleccione provincia
           if(provincias.value == ""){
                errorProv.innerHTML = "Debe seleccionar una Provincia";
                provincias.style.border = "2px solid #ffa81c";
            }else{
                errorProv.innerHTML = "";
                provincias.style.border = "2px solid #20db93";
            }




      //si todo esta bien, le doy la bienvenida
              if(!errores){
                  alert("¡Tu Registro fue un éxito!")
              };
     

     })

    });
   

    window.addEventListener('load',function(){
        fetch('https://apis.datos.gob.ar/georef/api/provincias')
        .then(function(response){
          return response.json();
        })
        .then(function(datos){
           var opciProv = document.querySelector("#prov");
           for(var i = 0; i < datos.provincias.length; i++){
           opciProv.innerHTML = opciProv.innerHTML + "<option value='"+datos.provincias[i].id+"'>"+datos.provincias[i].nombre+"</option>";
           
           }
        })
        .catch(function(error){
          console.log(error);
        });

      })