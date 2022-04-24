//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto 
//"El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto 
//"El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto 
//"El número más frecuente es..."

document.querySelector("#boton").onclick = function (){
    
    document.querySelector("#promedio").textContent += (promedioNumeros())
    document.querySelector("#grande").textContent += (numeroMayor())
    document.querySelector("#pequeno").textContent += (numeroMenor())
    document.querySelector("#frecuente").textContent += (numeroFrecuente())
    
    return false}

let liElements = document.getElementsByTagName('li')
let liNumbers = []

for (let i = 0; i < liElements.length; i++) {
    let liValue = Number(liElements[i].innerText)
    if (!isNaN(liValue)) {
        liNumbers.push(liValue)
    }
}


function promedioNumeros (){

let resultadoTodos = 0
let promedio = 0
for(let i = 0; i<liNumbers.length; i++){
    resultadoTodos = resultadoTodos + liNumbers[i]
    promedio = resultadoTodos / liNumbers.length
}
return promedio
}

function numeroMayor() {
    let maximoNumero = liNumbers[0]
    for(i = 0; i < liNumbers.length; i++){
        let contador = liNumbers[i]
        while(contador > maximoNumero){
            maximoNumero = contador
        }
    } 
return maximoNumero
}

function numeroMenor() {
    let minimoNumero = liNumbers[0]
    for(i = 0; i < liNumbers.length; i++){
        let contador = liNumbers[i]
        while(contador < minimoNumero){
            minimoNumero = contador
        }
    }
return minimoNumero
}

function numeroFrecuente() {
   let nroFrecuente = 0
    for (i = 0; i < liNumbers.length; i++){
        let contador = liNumbers[i]
        for (j = 1; j < liNumbers.length; j++){
           let contadorJ = liNumbers[j] 
           if (contador = contadorJ){
                    nroFrecuente = contador
                
            }
        }
    }
return nroFrecuente
}
