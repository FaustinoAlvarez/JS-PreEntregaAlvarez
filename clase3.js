//While

// while(condicion){
//     //se genere determinada funcion
// }

// let prueba = 0

// while (prueba <= 3){
//     console.log(prueba)
// }



let entrada = prompt("Ingrese texto o ESC para interrumpir")

let texto = ""

while (entrada != "ESC" && entrada != "esc"){
    texto += entrada + " "
    entrada = prompt("Ingrese texto o ESC para interrumpir")
}

alert(texto)




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


// let tabla = Number(prompt("Ingrese la tabla de multiplicar"))

// for (let i = 0 ; i <= 10 ; i++){
//     let resultado = tabla * i 
//     console.log(`${tabla} x ${i} = ${resultado}`)
// }

// let prenda = prompt("Que prenda le interesa comprar")
// // let marca  = prompt("Que marca le interesa comprar")

// switch (prenda){
//     case "pantalon":
//         console.log(`Prenda: ${prenda}, joggins $4000, jeans $5600, shorts $2500, bermudas $3200.`)
//         break;
//     case "remera", "chomba", "musculosa":
//         console.log(`Prenda: ${prenda}, remeras mangas cortas $2800, musculosas $1900, remeras mangas largas $3100, chombas $5500.`)
//         break;
//     case "buzo", "campera":
//     console.log(`Prenda: ${prenda}, buzos con capucha $12000, buzos sin capucha $9000, camperas con capucha $14000, camperas sin capucha $10500`)
//     break;
//     default:
//         console.log(`No tenemos disponible: ${prenda}`)
//         break
// }