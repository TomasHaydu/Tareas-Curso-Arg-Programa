let horasTotales = 0
let minutosTotales = 0
let segundosTotales = 0

document.querySelector("#boton-ingresar").onclick = function calcular() {
    const horasCurso = Number(document.querySelector("#horas-curso").value)
    const minutosCurso  = Number(document.querySelector("#minutos-curso").value)
    const segundosCurso = Number(document.querySelector("#segundos-curso").value)

    horasTotales = horasTotales + horasCurso
    minutosTotales = minutosTotales + minutosCurso
    segundosTotales = segundosTotales + segundosCurso

    
    if (minutosTotales >= 60){
        horasTotales = Math.floor(minutosTotales/60)
        minutosTotales = minutosTotales % 60
    }
    
    if (segundosTotales >= 60){
        minutosTotales = Math.floor(minutosTotales/60)
        segundosTotales = segundosTotales % 60
    }
    
    document.querySelector("#tiempo-total").innerText = ("Tiempo total = " + horasTotales +
     "hs. " + minutosTotales + "min. " + segundosTotales + "seg.")

    return false
}

document.querySelector("#boton-ingresar").onclick = function() {
    const horasCurso = Number(document.querySelector("#horas-curso").value)
    const minutosCurso  = Number(document.querySelector("#minutos-curso").value)
    const segundosCurso = Number(document.querySelector("#segundos-curso").value)

    let nuevoTiempoTotal = totalTiempoVideos.registrarNuevoTiempoVideo(horasCurso, minutosCurso, segundosCurso);

    document.querySelector("#tiempo-total").innerText = ("Tiempo total = " + nuevoTiempoTotal.horasTotales +
     "hs. " + nuevoTiempoTotal.minutosTotales + "min. " + nuevoTiempoTotal.segundosTotales + "seg.")

    return false
}