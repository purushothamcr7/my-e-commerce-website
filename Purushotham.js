let cart = [];
let cartTotal = 0;

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.name} - RS ${item.price}`;
        li.classList.add("Items")
        cartItems.appendChild(li);
    });

    cartTotalElement.innerText = cartTotal;
}

function addItemToCart(productName, price) {
    cart.push({
        name: productName,
        price: price
    });
    cartTotal += price;

    updateCart();
}