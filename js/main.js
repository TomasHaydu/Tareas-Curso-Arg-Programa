const $form = document.querySelector('#carta-a-santa');

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter'
    }

    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres'
    }

    if (nombre.length < 2) {
        return 'Este campo debe tener al menos 2 caracteres'
    }

    if (!/^[A-z]+$/.test(nombre)) {
        return 'Este campo debe contener solo letras'
    }
    return ''
}

function validarCiudad(ciudad) {
    if (ciudad === '') {
        return 'Este campo esta incompleto'
    }
    return ''
}


function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return 'Este campo debe tener al menos 1 caracter'
    }

    if (descripcionRegalo.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres'
    }

    if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return 'Este campo solo debe tener numeros y letras'
    }
    return ''
}

function validarFormulario(event) {
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    };

    const esExito = manejarErrores(errores) === 0;

    if(esExito){
        $form.className = "oculto"
        document.querySelector("#exito").className = "";
    }

    event.preventDefault();
}

function manejarErrores(errores) {
    const keys = Object.keys(errores);   
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0 ;
    

    keys.forEach(function(key){
        const error = errores[key];
        

        if (error){
            $errores.remove()
            
            cantidadErrores++
            
            $form[key].className = "error";

            const $error = document.createElement("li")
            $error.innerText = error;
            $errores.appendChild($error)
            
        
        } else {

            $form[key].className = "";
        }
    })

    return cantidadErrores
}

$form.onsubmit = validarFormulario;