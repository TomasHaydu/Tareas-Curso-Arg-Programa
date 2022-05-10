const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

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

    if (!/[A-z]+/.test(nombre)) {
        return 'Este campo debe contener solo letras'
    }
    return ''
}


validarNombre(nombre)

function validarCiudad(ciudad) {
    if (ciudad = "") {
        return 'Este campo esta incompleto'
    }
    return ''
}

validarCiudad(ciudad)

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return 'Este campo debe tener al menos 1 caracter'
    }

    if (descripcionRegalo.length >= 0) {
        return 'Este campo debe tener menos de 50 caracteres'
    }

    if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return 'Este campo solo debe tener numeros y letras'
    }
    return ''
}

validarDescripcionRegalo(descripcionRegalo)

function validarFormulario(event){
    const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

const errorNombre = validarNombre(nombre);
const errorCiudad = validarCiudad(ciudad);
const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    descripcionRegalo: errorDescripcionRegalo
};

manejarErrores(errores);

event.preventDefault();
}

function manejarErrores (errores){
    errorNombre = errores.nombre;
    errorCiudad = errores.ciudad;
    errorDescripcionRegalo = errores.descripcionRegalo;
 
    if(errorNombre){
        $from.nombre.className = "error";
    } else {
        $from.nombre.className = "";
    }
    
    if(errorCiudad){
        $from.ciudad.className = "error";
    } else {
        $from.ciudad.className = "";
    }

    if(errorDescripcionRegalo){
        $from.descripcionRegalo.className = "error";
    } else {
        $from.descripcionRegalo.className = "";
    }
}

$form.onsubmit = validarFormulario;