// if(condicion){
//     //respuesta
// }else{
//     //otra respuesta
// }

// //Ejemplo
// const puntaje = 1000
// if (puntaje == 1000){

//     console.log("Has ganado la partida")
// }else{
//     console.log("Has perdido la partida")
// }

// OPERADORES LÓGICOS

// == igualdad
// > mayor que
// < menor que
// != distinto
// >= mayor o igual
// <= menor o igual
// === estrictamente igual
// !== estrictamente diferente
// && AND
// || OR


//10 == 10 true
//10 == 30 false


// //Ejemplo
// const puntaje2 = 1000
// if (puntaje2 === "1000"){

//     console.log("True")
// }else{
//     console.log("False")
// }

// //Ejemplo
// const puntaje3 = 1000
// if (puntaje3 !== "1000"){

//     console.log("True")
// }else{
//     console.log("False")
// }

// //Ejemplo
// const TotalDeMiCompra = 1500

// const BilleteraFinDeMes = 1000

// if (TotalDeMiCompra < BilleteraFinDeMes){
//     console.log("Compra realizada")
// }else{
//     console.log("Vuelva con mas plata")
// }

// //Ejemplo
// const efectivo = 300
// const credito = 400
// const TotalAPagar = 600
// const disponible = efectivo + credito

// if(efectivo > TotalAPagar || credito > TotalAPagar || disponible > TotalAPagar ){
//     console.log("Podemos Comprar")
// }else{
//     console.log("Fondos Insuficiente")
// }

// //Ejemplo
// const texto = prompt("Ingrese la palabra 'CoderHouse'")
// if (texto === "CoderHouse") {
//     alert("La respuesta es correcta")
// } else {
//     alert("La respuesta es incorrecta")
// }

// //Ejemplo
// let precio = prompt("Ingrese el precio del producto")

// if (precio >= 100){
//     alert("El producto es caro")
// }else {
//     alert("El producto esta al alcance del bolsillo")
// }


//TABLAS DE LA VERDAD

/*
&&
X | Y | X && Y
T | T | T
T | F | F
F | T | F
F | F | F

const a = 10

console.log(a > 5  && a < 20)


//TABLAS DE LA VERDAD

/*
&&
X | Y | X || Y
T | T | T
T | F | T
F | T | T
F | F | F

let a = 8

console.log(a < 5 || a > 15)
*/

/*
let precio = prompt("Ingrese el precio de la hamburguesa")

if(precio > 1000){
    console.log("Bastante cara")
}else if(precio > 500){
    console.log("yyyyy... puede ser")
}else{
    console.log("Buena, bonita, barata.")
}
*/

// const nombre = prompt("Ingrese su nombre")
// const apellido = prompt("Ingrese su apellido")

// if ((nombre != "") && (apellido != "")){
//     alert(nombre + " " + apellido)
// }else{
//     alert("Faltan datos")
// }

let presupuesto = prompt("Ingrese su presupuesto para un celular")
if(presupuesto >= 70000){
    alert("Puede comprar un celular de gama alta")
}else if(presupuesto >= 45000){
    alert("Puede comprar un celular de gama media")
}else if(presupuesto >= 15000){
    alert("Puede comprar un celular de gama baja")
}else if(presupuesto != "" || " "){
    alert("Ingrese una cantidad valida")
}else{
    alert("No hay celulares disponibles por ese monto")
}