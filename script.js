function validarFormulario(){
    //NOMBRE
    let nombreInput = document.getElementsByName('nombre')[0];
    let nombre = nombreInput.value.trim(); //Esto elimina los espacios en blanco al principio y al final del valor, asegurando que no haya espacios innecesarios.

    if(nombre === ""){
        alert('Por favor, escribe tu nombre.');
        nombreInput.focus();
        return false; 
    }
    
    if(nombre.length > 50) {
        alert('Excede los 50 caracteres permitidos');
        nombreInput.focus();
        return false;
    }

    //EMAIL
    let emailInput = document.getElementsByName('email')[0];
    let email = emailInput.value.trim(); 

    if(email === ""){
        alert('Por favor, escribe tu email.');
        emailInput.focus();
        return false; 
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, escribe un email válido. Ejemplo: texto@texto.com');
        emailInput.focus();
        return false;
    }
    
    //ASUNTO
    let asuntoInput = document.getElementsByName('asunto')[0];
    let asunto = asuntoInput.value.trim();
    
    if(asunto === ""){
        alert('Por favor, escribe un asunto.');
        asuntoInput.focus();
        return false; 
    }

    if (asunto.length > 50) {
        alert('Excede los 50 caracteres permitidos');
        asuntoInput.focus();
        return false;
    }

    //MENSAJE
    let mensajeTextArea = document.getElementsByName('mensaje')[0];
    let mensaje = mensajeTextArea.value.trim();

    if(mensaje === ""){
        alert('Por favor, escribe un mensaje.');
        mensajeTextArea.focus();
        return false; 
    }

    if (mensaje.length > 300) {
        alert('Excede los 300 caracteres permitidos');
        mensajeTextArea.focus();
        return false;
    }

    return true;

}

