/*

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





//CLASE 5



//creo clase (función constructora) con función que calcule precio*cantidad
class Compra {
    constructor(nombre, precio, cantidad) {

        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
reserva(){
    console.log("El cliente ha cargado en el carrito")
}
}


let costo1 = 0;
let nombre1 = "";
let precio1 = 0;
let cantidad = 0;
let costoTotal1 = 0;



//creo ciclo con while para que ingrese X número de compras:
while (true) {
    alert("Insertar una nueva compra en el carrito");

    //Declaro variables con ventana de ingreso y break con "cancelar" 
    nombre1 = prompt("Ingrese el nombre del producto");
    if (nombre1 == "cancelar") {
        break
    };
    precio1 = parseFloat(prompt("Ingrese el precio del producto"));
    if (precio1 == "cancelar") {
        break
    };
    cantidad1 = parseFloat(prompt("Ingrese la cantidad deseada"));
    if (cantidad1 == "cancelar") {
        break
    };



    //creo nuevo producto con los datos ingresados por el usuario
    const compra1 = new Compra(nombre1, precio1, cantidad1)



    //declaro la variable resultado 
    let resultado = "";
    //declaro el contenido de esa variable
    resultado += "Usted comprará:" + " " + compra1.nombre + ", " + "precio:" + " " + compra1.precio + ", " + "cantidad:" + " " + compra1.cantidad + ". " + "\n"
    //salida con todo lo ingresado por el usuario
    alert(resultado)

    //calculo y alert de precio * cantidad
    total(precio1, cantidad1);
    costoTotal(costo1, costoTotal1);
    

    alert("El costo es de $ " + costo1)
    alert("El monto a pagar es de $ " + costoTotal1)
    



    //visualizo en consola el objeto "Producto1" ingresado por el usuario,  precio * cantidad y precio total
    console.log(compra1)
    console.log("costo $" + costo1)
    console.log("Monto a pagar $" + costoTotal1)
    compra1.reserva()


}




//funciones
function total(precio, cantidad) {
    costo1 = precio1 * cantidad1
};

function costoTotal(costo, costo2) {
    costoTotal1 = costo1 + costoTotal1
};

*/
//CLASE 6

//Clase
class Sesiones {
    constructor (nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
    }
    }

//Declaro objetos a la venta

const sesionesRecienNacido = new Sesiones ("Recién Nacido", 5000, 3);

const sesionesBebe = new Sesiones ("Bebés", 4000, 5);

const sesionesNinos = new Sesiones ("Niños", 3000, 6);




//Declaro array de objetos a la venta
const sesionesFotograficas = [sesionesRecienNacido, sesionesBebe, sesionesNinos];

//declaro array de carrito
const carrito = [];

//ingreso de sesiones solicitadas por usuario y salida por alert

alert("Bienvenido al carrito de compras")





let sesionSolicitada = prompt("Ingrese el nombre de la sesión fotográfica deseada");


while (sesionSolicitada != 'ESC') {
    carrito.push(sesionSolicitada);
    sesionSolicitada = prompt("Ingrese el nombre de la sesión fotográfica deseada");
}

alert("Usted tiene en su carrito las siguientes sesiones:" + "\n" + carrito)


//Para ser usado por el vendedor (fotógrafa)

//para ver cantidad de distintas sesiones ofrecidas:

console.log ("Cantidad de distintos tipos de sesiones fotográficas ofrecidas:" + " " + sesionesFotograficas.length)
//listado de sesiones ofrecidas, con precio:



