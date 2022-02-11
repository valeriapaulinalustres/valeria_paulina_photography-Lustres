
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

            </div>
        `
    })

    divCart.innerHTML = htmlListProducts

    registerClickEvent()
}

const showProducts = (category='all') => {
    const divProducts = document.getElementById("products")
    let htmlListProducts = ""

    let products = []

    if(category == 'cheap') products = PRODUCTS.filter(p => p.price < 2000)
    else if(category == 'expensive') products = PRODUCTS.filter(p => p.price >= 6000)
    else products = PRODUCTS

    products.forEach(product => {
        htmlListProducts += `
            <div style="border: 2px solid white">
                <img src="${product.img}" height="50"></img><br>
                <b>${product.name}</b>
                <p>$ ${product.price}</p>

                <button class="addCart col-sm" id="p-${product.id}">Comprar 🛒</button>
            </div>
        `
    })

    divProducts.innerHTML = htmlListProducts

    registerClickEvent()
}

const registerClickEvent = () => {

    const btnAddCarts = document.getElementsByClassName("addCart")
    for(const btn of btnAddCarts) {
        btn.onclick = addCart
    }

}

const addCart = (event) => {
    const productId = parseInt(event.target.id.split("-")[1])

    const product = PRODUCTS.find(p => p.id == productId)
    const productInCart = CART.find(p => p.id == productId)
    
    if(productInCart) productInCart.add()
    else {
        const productCart = new ProductCart(product)
        CART.push(productCart)
        
    }

    showProductCarts()
    CalculateTotalCart()
}

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
document.getElementById("btnShowProductExpensives").onclick = () => { showProducts('expensive') }


/*
//aplica descuento al valor total de la compra si es que tiene un código de descuento

const descuento = 20;

function precioConDescuento(precio, porcentaje) {
    return (precio - (precio * porcentaje / 100));

};

document.getElementById("btnDiscount").onclick = () => {

   
    let codigo = "1234"



let codigoDescuento = document.getElementById("codigoDescuento");

if (codigoDescuento == codigo) {
    alert("código correcto")
        //"El precio final es de: " + " " + "$" + precioConDescuento(totalSesiones, descuento));

} else {
    alert("Código incorrecto")

}

}
*/

/*
const updateCache = () => {
    const cartJSON = JSON.stringify(CART)
    localStorage.setItem("CART", cartJSON)
}

const getCache = () => {
    const cartJSON = localStorage.getItem("CART")
    if(CARTJSON) CART = JSON.parse(cartJSON)
    listBag()
}

getCache()

*/