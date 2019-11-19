
 window.addEventListener('load', function(){
              
    //detectar cuando toco el boton de registro (se envía el formulario)
     var botonRegistro = document.querySelector("button.Registrarme");
     botonRegistro.addEventListener('click',function(){
      
      //tomar los datos del formulario
        var nombre = document.querySelector("input#nombre");
        var email = document.querySelector("input#email");
        var telefono = document.querySelector("input#telefono");
        var fechaNacimiento = document.querySelector("input#FechaNac");
        var sexoF = document.querySelector("input#femenino");
        var sexoM = document.querySelector("input#masculino");
        var pass = document.querySelector("input#password");
        var pass_confirm = document.querySelector("input#password_confirm")
        var errores = false;

       //los span de errores del formulario 
        var errorNombre = document.querySelector("span.errorNombre");
        var errorEmail = document.querySelector("span.errorEmail");
        var errorTelefono = document.querySelector("span.errorTelefono");
        var errorFechaNacimiento = document.querySelector("span.errorFechaNac");
        var errorSexoF = document.querySelector("span.errorSexoF");
        var errorSexoM = document.querySelector("span.errorSexoM");
        var errorPass = document.querySelector("span.errorContrasenia");
        

      //por cada dato voy a validar (todo lo que se pueda)
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
        }else{
            errorEmail.innerHTML = "";
            email.style.border = "2px solid #20db93";
          }
          //campo telefono
          if(telefono.value == ""){
            errorTelefono.innerHTML = "El teléfono es obligatorio.";
            telefono.style.border = "2px solid #ffa81c";
            errores = true;
          }else if(telefono.value.length < 3){
            errorTelefono.innerHTML = "El teléfono debe contener al menos 3 caracteres.";
            telefono.style.border = "2px solid #ffa81c";
            errores = true;
        }else if(telefono.value.length > 10){
            errorTelefono.innerHTML = "La extensión del teléfono no debe superar los 10 caracteres.";
            telefono.style.border = "2px solid #ffa81c";
            errores = true;
        }else if (telefono.value.trim()== ""){
            errorTelefono.innerHTML = "El teléfono no puede tener espacios vacios.";
            telefono.style.border = "2px solid #ffa81c";
            errores = true;
        }else{
            errorTelefono.innerHTML = "";
            telefono.style.border = "2px solid #20db93";
        }
            //campo fecha nacimiento

            //campo sexo femenino
            //campo sexo masculino

            //campo password
            if(pass.value == ""){
                errorPass.innerHTML = "La contraseña es obligatoria.";
                pass.style.border = "2px solid #ffa81c";
                errores = true;
              }else if(pass.value.length < 8){
                errorPass.innerHTML = "La contraseña debe contener al menos 8 caracteres.";
                pass.style.border = "2px solid #ffa81c";
                errores = true;
            }else if(pass.value.length > 30){
                errorPass.innerHTML = "La extensión de la contraseña no debe superar los 30 caracteres.";
                pass.style.border = "2px solid #ffa81c";
                errores = true;
            }else if (pass.value.trim()== ""){
                errorPass.innerHTML = "La contraseña no puede tener espacios vacios.";
                pass.style.border = "2px solid #ffa81c";
                errores = true;
            }else if(pass.value != pass_confirm.value){
                errorPass.innerHTML = "Las contraseñas deben ser iguales.";
                pass.style.border = "2px solid #ffa81c";
                errores = true;
            }else{
                errorPass.innerHTML = "";
                pass.style.border = "2px solid #20db93";
            };
            
      //le aviso al usuario (maqueta) de a un error

      //si todo esta bien, le doy la bienvenida
              if(!errores){
                  alert("¡Tu Registro fue un éxito!")
              };
     

     })

    });
