document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartModal = document.getElementById("cart-modal");
    const closeBtn = document.querySelector(".close");
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutBtn = document.getElementById("checkout-btn");
    let cartCount = 0;
    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            cartCount++;
            cartCountSpan.textContent = cartCount;
            const product = button.parentElement;
            const productName = product.querySelector("h2").textContent;
            const productPrice = parseInt(product.querySelector("p").textContent.replace("$", ""));
            total += productPrice;
            cartTotal.textContent = total;
            const li = document.createElement("li");
            li.textContent = `${productName} - $${productPrice}`;
            cartItemsList.appendChild(li);
        });
    });

    cart.addEventListener("click", function() {
        cartModal.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        cartModal.style.display = "none";
    });

    checkoutBtn.addEventListener("click", function() {
        alert(`Checkout - Total: $${total}`);
    });
});
