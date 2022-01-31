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
    reserva() {
        console.log("El cliente ha cargado en el carrito")
    }
}



let sesionIngresada = "";
let precioIngresado = 0;
let cantidadIngresada = 0;
let seguirComprando = "";

alert("Bienvenido al carrito de compras")

do {
    
    sesionIngresada = prompt("Ingrese el nombre del producto");
    precioIngresado = parseFloat(prompt("Ingrese el precio del producto"));
    cantidadIngresada = parseFloat(prompt("Ingrese la cantidad deseada"));
    //creo nuevo producto con los datos ingresados por el usuario
    const compraIngresada = new Compra(sesionIngresada, precioIngresado, cantidadIngresada)

    seguirComprando = prompt("¿Desea seguir agregando productos en el carrito?")

    //declaro la variable resultado 
    let respuestaCompra = "";
    //declaro el contenido de esa variable
    respuestaCompra += "Usted comprará:" + " " + compraIngresada.nombre + ", " + "precio:" + " " + compraIngresada.precio + ", " + "cantidad:" + " " + compraIngresada.cantidad + ". " + "\n"
    //salida con todo lo ingresado por el usuario
    alert(respuestaCompra)

    //calculo y alert de precio * cantidad
    let subtotal =  precioPorUnidad(precioIngresado, cantidadIngresada);
    let totalPagar = totalSuma(subtotal, precioIngresado);


    alert("El subtotal es de $ " + subtotal)
    alert("El monto total a pagar es de $ " + totalPagar)




    //visualizo en consola el objeto "Producto1" ingresado por el usuario,  precio * cantidad y precio total
    console.log(compraIngresada)
    console.log("subtotal $" + subtotal)
    console.log("Monto total a pagar $" + totalPagar)
    compraIngresada.reserva()

    
} while (seguirComprando == "si");



//funciones
function precioPorUnidad(precio, cantidad) {
    return (precio * cantidad)
};

function totalSuma(costo, costo2) {
    return (costo + costo2)
};




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


*/


//clase 7

class Sesiones {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
    }
}

//Listado de objetos (sesiones)

const sesionesDulceEspera = {
    nombre: "dulce espera",
    precio: 5000,
    cantidad: 5,
};


const sesionesRecienNacido = {
    nombre: "recien nacido",
    precio: 5000,
    cantidad: 5,
};


const sesionesNinos = {
    nombre: "ninos",
    precio: 4000,
    cantidad: 5,
};

const sesionesTeens = {
    nombre: "teens",
    precio: 4000,
    cantidad: 5,
};

const sesionesFineart = {
    nombre: "fine art",
    precio: 4000,
    cantidad: 5,
};


const sesionesEventosSociales = {
    nombre: "eventos sociales",
    precio: 2000,
    cantidad: 5,
};


const sesionesComunion = {
    nombre: "comunion",
    precio: 3000,
    cantidad: 5,
};

//Declaro array de objetos a la venta
const sesionesFotograficas = [sesionesDulceEspera, sesionesRecienNacido, sesionesTeens, sesionesFineart, sesionesEventosSociales, sesionesComunion, ];



//Pregntar precio ingresando nombre de sesión

function consultarPrecioSesion(sesionesFotograficas, nombreSesion) {
    return sesionesFotograficas.find(objeto => objeto.nombre === nombreSesion.toLowerCase());
}

let sesionInput ="";
sesionInput = prompt("Ingrese el nombre de la sesión fotográfica que desea consultar el precio");

while (sesionInput != "ESC") {
    let busquedaSesion = consultarPrecioSesion(sesionesFotograficas, sesionInput);
    if (busquedaSesion != undefined) {
        alert("Usted seleccionó: " + busquedaSesion.nombre + "\n" + " El costo es de $ " + busquedaSesion.precio);
        
    } else {
        alert("No existe una sesión fotográfica con ese nombre. Inténtelo nuevamente por favor.");
    };
    sesionInput = prompt("Ingrese el nombre de la sesión fotográfica que desea consultar el precio");
    
};

//Filtrar por precio ingresando un valor máximo

function filtroPrecios(sesionesFotograficas, precio) {
    return sesionesFotograficas.filter(objeto => objeto.precio < parseFloat(precio));
}
function listarPreciosBajos(preciosBajos) {
    let listaPreciosBajos = "";
    for (const sesiones of preciosBajos) {
        listaPreciosBajos += "Sesión Fotográfica: " + sesiones.nombre + "," + "precio: $" + sesiones.precio + "\n"
    }
    return listaPreciosBajos;
}

let precioInput ="";
precioInput = prompt("Ingrese precio máximo");


while (precioInput != "ESC") {
    let filtroIngresado = filtroPrecios(sesionesFotograficas,precioInput );
    if (filtroIngresado.length > 0) {
        alert(listarPreciosBajos(filtroIngresado));
    } else {
        alert("No existen sesiones con el precio menor al ingresado");
    }
    precioInput = prompt("Ingrese precio máximo");
    
}

// Alert con listado de nombres y precios de sesiones fotográficas ofrecidas:

let conocerListado = prompt("¿Desea conocer el listado de sesiones fotográficas ofrecido?");
let listaUnitaria = "";
let pitufo = "";

if (conocerListado === "si") {
    for (const lista of sesionesFotograficas) {listaUnitaria = (lista.nombre +": " +"$"+ lista.precio)
    pitufo += listaUnitaria + "\n";
    }
alert(pitufo)
    
} else {alert("Gracias")
    
}

//alert con total de sesiones ofrecidas
alert("Total de opciones:" + sesionesFotograficas.length)