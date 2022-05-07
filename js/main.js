const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;


function validarNombre (nombre) {
    if(nombre.lenght == 0 ){
        return 'Este campo debe tener al menos 1 caracter'
    }

    if (nombre.lenght >= 50){
        return 'Este campo debe tener menos de 50 caracteres'
    }

    if (nombre.lenght < 2){
        return 'Este campo debe tener al menos 2 caracteres'
    }

    if (nombre = Number(nombre)){
        return 'Este campo debe contener solo letras'
    }
return ''
}


validarNombre(nombre)

function validarCiudad (ciudad) {
    if (ciudad = ""){
        return 'Este campo esta incompleto'
    }
    return ''
}

validarCiudad(ciudad)

function validarDescripcionRegalo (descripcionRegalo){
    if(descripcionRegalo.lenght === 0 ){
        return 'Este campo debe tener al menos 1 caracter'
    }

    if (descripcionRegalo.lenght >= 0){
        return 'Este campo debe tener menos de 50 caracteres'
    }
return ''
}

validarDescripcionRegalo(descripcionRegalo)
