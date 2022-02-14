

//muestra listado de sesiones en el carrito

const showProductCarts = () => {
    const divCart = document.getElementById("productsOnCart")
    let htmlListProducts = ""

    CART.forEach(product => {
        htmlListProducts += `
            <div style="border: 1px solid #98CBCB">
            <img src="${product.img}" height="50"></img><br>
                <b>${product.name}</b><br>
                <i>Cantidad: ${product.quantity}</i>
                <p>Unitario: $ ${product.unit_price}</p>
                <p>Total: $ ${product.total}</p>
                <button class="contactos deleteItem" id="p-${product.id}">❌</button>

            </div>
        `
        

    })

    divCart.innerHTML = htmlListProducts

    registerClickEvent()
}

//muestra botones para seleccionar filtrado

const showProducts = (category='all') => {
    const divProducts = document.getElementById("products")
    let htmlListProducts = ""

    let products = []

    if(category == 'cheap') products = PRODUCTS.filter(p => p.price < 2000)
    else if(category == 'expensive') products = PRODUCTS.filter(p => p.price >= 6000)
    else products = PRODUCTS

    //muestra listado de sesiones ofrecidas
    products.forEach(product => {
        htmlListProducts += `
            <div class="container-js" style="border: 2px solid white">
                <img src="${product.img}" height="50"></img><br>
                <b>${product.name}</b>
                <p>$ ${product.price}</p>

                <button class="addCart contactos" id="p-${product.id}">Comprar 🛒</button>
            </div>
        `
    })

    divProducts.innerHTML = htmlListProducts

    registerClickEvent()
}

//evento clic en botón comprar

const registerClickEvent = () => {

    const btnAddCarts = document.getElementsByClassName("addCart")
    for(const btn of btnAddCarts) {
        btn.onclick = addCart
    }

}

//muestra lo que se va agregando al carro

const addCart = (event) => {
    const productId = parseInt(event.target.id.split("-")[1])

    const product = PRODUCTS.find(p => p.id == productId)
    const productInCart = CART.find(p => p.id == productId)
    
    if(productInCart) productInCart.add()
    else {
        const productCart = new ProductCart(product)
        CART.push(productCart)
        //actualiza localStorage
        updateCache()
        //
    }

    showProductCarts()
    CalculateTotalCart()
    
}

//suma el total de la compra

const CalculateTotalCart = () => {
    let suma = 0
    CART.forEach(p => suma += p.total)

    const elemntTotal = document.getElementById("totalCart")
    elemntTotal.innerHTML = suma
}

CalculateTotalCart()
showProducts()

document.getElementById("btnShowProductAll").onclick = () => { showProducts('all') }
document.getElementById("btnShowProductCheap").onclick = () => { showProducts('cheap') }
document.getElementById("btnShowProductExpensive").onclick = () => { showProducts('expensive') };


//para borrar item de carro EN PROCESO, AUN NO FUNCIONA

//let botonBorrarItem = document.getElementsByClassName("deleteItem")
 // botonBorrarItem.onclick = () => {console.log("hola")};      
//botonBorrarItem.addEventListener("click", borrarItemCarrito)

//function borrarItemCarrito () {console.log ("borro")};
/*
function borrarItemCarrito (evento){ 
const id = parseInt(evento.target.id.split("-")[1])
CART = CART.filter((CARTid) => {
return CARTid !== id;
}
)}
*/


/*

const deleteItem = () => {

const botonDeleteItem = document.getElementsByClassName("deleteItem")
for(const btn of botonDeleteItem) {
    btn.onclick = () =>{console.log("borro")}
}

}
*/
/*
const addCart = (event) => {
const productId = parseInt(event.target.id.split("-")[1])


const productInCart = CART.find(p => p.id == productId)

if(productInCart) productInCart.add()
else {
    const productCart = new ProductCart(product)
    CART.push(productCart)
    //actualiza localStorage
    updateCache()
    //
}

showProductCarts()
CalculateTotalCart()

}







let boton = document.getElementsByClassName("deleteItem")
//boton.addEventListener("click", respuestaClick)
//function respuestaClick () {
//    console.log ("borro")
//}


boton.addEventListener("click", myFunction);

function myFunction() {
  console.log("borro")
}
*/
/*
const registerClickDelete = () => {

    const btnRemoveCarts = document.getElementsByClassName("deleteItem")
    for(const btn of btnRemoveCarts) {
        btn.onclick = removeCart
    }

} ;
function removeCart () {console.log("borro")}
*/

let boton = document.getElementById("deleteItem")
      boton.addEventListener("click", respuestaClick)
      function respuestaClick(){
        console.log("Respuesta evento");}
