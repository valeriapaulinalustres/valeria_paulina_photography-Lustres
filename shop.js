//El usuario selecciona todos las sesiones fotográficas que quiere y le devuelve alert con listado de las mismas


let num1 = parseFloat(prompt("Inserte el número total de sesiones que reservará"))

console.log("Total de sesiones reservadas:" + " " + num1)

if (isNaN(num1)) {
    alert("no ingrese el número en letras, por favor")

} else {
    let sesiones = '';
    for (let index = 0; index < num1; index++) {
        sesiones += prompt("Ingrese el nombre de las sesiones fotográficas")+"\n";
    }
    alert("Usted reservará las siguientes sesiones fotográficas:" + "\n" + sesiones);
}
    




//suma de precios de todos los ítems seleccionados



let num = prompt("Inserte el número total de sesiones que reservará");
let valorSesion;
let totalSesiones = 0;
for (let i = 0; i < num; i++) {
    valorSesion = prompt("Ingrese el valor de la sesión fotográfica: ");
    totalSesiones = parseFloat(totalSesiones) + parseFloat(valorSesion)
}

alert("El costo total de las sesiones fotográficas es de: " + parseFloat(totalSesiones));


//aplica descuento al valor total de la compra si es que tiene un código de descuento

const descuento = 20;

function precioConDescuento(precio,porcentaje) {return (precio - (precio*porcentaje/100));
    
};
let codigo = "1234"
let codigoDescuento = parseInt(prompt("Ingrese si tiene, el código de descuento"));

if (codigoDescuento == codigo) {alert("El precio final es de: " + " " + "$" + precioConDescuento(totalSesiones,descuento));
    
} else {alert("Como usted no tiene el código de descuento, el precio final es de:" + " " + "$" + totalSesiones)
    
}
