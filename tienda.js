alert ("ingrese el numero del producto que quiere llevar")
let seleccionDeCompra = prompt("1 -Vip $2,  2 -Vip $4,  3 -Vip $8")
let carroDeCompra = seleccionDeCompra

if (carroDeCompra == 1){
    seleccionDeCompra = "1"
    alert (`Usted selecciono la opcion ${seleccionDeCompra}`)
    
}else if (carroDeCompra == 2){
    seleccionDeCompra = "2"
    alert (`Usted selecciono la opcion ${seleccionDeCompra}`)
    
}else if (carroDeCompra == 3){
    seleccionDeCompra = "3"
    alert (`Usted selecciono la opcion ${seleccionDeCompra}`)
}else {
    alert(`${carroDeCompra} no es un producto, por favor seleccione un numero de producto`)
}

let seguirCompra = prompt("Si desea seguir comprando digite A, si quiere finalizar la compra digite ESC")

if (seguirCompra != "ESC" && seguirCompra != "esc"){
    let segundaCompra = prompt("1 -Vip $2,  2 -Vip $4,  3 -Vip $8")
    alert (`Usted selecciono la opcion ${segundaCompra}`)
    carroDeCompra += " " + segundaCompra 
    alert (`Usted compro: ${carroDeCompra}`)
} else { 
    alert (`Usted compro: ${carroDeCompra}`)
}

let precio