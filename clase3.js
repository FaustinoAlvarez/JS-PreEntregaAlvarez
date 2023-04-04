//While

// while(condicion){
//     //se genere determinada funcion
// }

// let prueba = 0

// while (prueba <= 3){
//     console.log(prueba)
// }



// let entrada = prompt("Ingrese texto o ESC para interrumpir")

// let texto = ""

// while (entrada != "ESC" && entrada != "esc"){
//     texto += entrada + " "
//     entrada = prompt("Ingrese texto o ESC para interrumpir")
// }

// alert(texto)




//Do While

// let y = 0

// do {
//     console.log(`el valor de la variable es: ${y}`)
//     y++
// } while (y <=10);



// FOR

// for (desde ; hasta ; actualizacion)

// for (let i = 0; i <= 10; i++){
//     alert(`el valor de la variable es: ${i}`)
// } 


let tabla = Number(prompt("Ingrese la tabla de multiplicar"))

for (let i = 1 ; i <= 10 ; i++){
    let resultado = tabla * i 
    console.log(`${tabla} x ${i} = ${resultado}`)
}