// Selecting elements
let cartItems = document.getElementById("cart_items");
let cartValue = document.getElementById("cart_value");
let priceContainer = document.getElementById("price_container");

// Initialize cart
let cart = [];
let cartCount = 0;
let cartPrice = [];

// Function to add items to cart
function addToCart(productTitle, productPrice) {
    cartCount++; // Increase the cart count
    cartValue.innerText = cartCount; // Update cart icon

    // Add item to cart array
    let cartObj = {
        name: productTitle,
        price: productPrice
    };
    cart.push(cartObj);
    cartPrice.push(productPrice);

    // Add item to cart display
    cartItems.innerHTML += `
        <div class="cart-item">
            <h1>${productTitle} <span>₹${productPrice}</span></h1>
        </div>
    `;

    // Update total price
    let totalPrice = cartPrice.reduce((sum, price) => sum + price, 0);
    priceContainer.innerHTML = `<p>Your Total Price is: ₹${totalPrice}</p>`;

    // Show cart items section
    cartItems.style.display = "block";
}

// Function to clear the cart
function clearCart() {
    cart = []; // Reset cart array
    cartPrice = []; // Reset cart prices
    cartCount = 0; // Reset cart count
    cartValue.innerText = cartCount; // Update cart icon
    cartItems.innerHTML = ""; // Clear cart items display
    priceContainer.innerHTML = "<p>Your Total Price is: ₹0</p>"; // Reset total price
    cartItems.style.display = "none"; // Hide cart if empty
}

// If you want to implement a 'Remove from Cart' feature, here’s an idea:

function removeFromCart(productName) {
    let index = cart.findIndex(item => item.name === productName);
    if (index !== -1) {
        cart.splice(index, 1); // Remove item from cart array
        cartPrice.splice(index, 1); // Remove item price from total
        cartCount--; // Decrease cart count
        cartValue.innerText = cartCount; // Update cart icon

        // Update cart items and total price after removal
        cartItems.innerHTML = "";
        cartPrice.forEach(item => {
            cartItems.innerHTML += `
                <div class="cart-item">
                    <h1>${item.name} <span>₹${item.price}</span></h1>
                </div>
            `;
        });

        let totalPrice = cartPrice.reduce((sum, price) => sum + price, 0);
        priceContainer.innerHTML = `<p>Your Total Price is: ₹${totalPrice}</p>`;

        if (cartCount === 0) {
            cartItems.style.display = "none"; // Hide cart if empty
        }
    }
}
