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

const nodeListStringNumerico = document.querySelectorAll('.numero');
const numerosArray = [];

function obtenerArray(nodeList){
  for(let i = 0; i < nodeList.length; i++){
    numerosArray.push(Number(nodeList[i].textContent));
  }
}

console.log (numerosArray)


function $promedio (){

let resultadoTodos = 0
let promedio = 0
for(let i = 0; i<numerosArr.length; i++){
    resultadoTodos = resultadoTodos + Number(numerosArr[i].innerText) 

    promedio = resultadoTodos / numeros.length
}
}

function numeroMayor() {
    let maximoNumero = numerosArr[0]
    for(i = 0; i < numerosArr.length; i++){
        let contador = numerosArr[i]
        if(contador > maximoNumero){
            maximoNumero = contador
        }
    }
    console.log (maximoNumero)
}