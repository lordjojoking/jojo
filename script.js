document.addEventListener('DOMContentLoaded', () => {
  // Retrieve cart items from localStorage or initialize as empty array
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const cartCount = document.getElementById('cart-count');

  // Function to update the cart count
  const updateCart = () => {
    cartCount.textContent = cartItems.length;
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Store updated cart items in localStorage
  };

  // Function to add product to cart
  const addToCart = (product) => {
    cartItems.push(product);
    updateCart();
    alert(`${product.name} has been added to your cart.`);
  };

  // Event listeners for "Add to Cart" buttons
  document.querySelectorAll('.cart-button').forEach(button => {
    button.addEventListener('click', () => {
      const product = {
        id: button.getAttribute('data-product-id'),
        name: button.getAttribute('data-product-name'),
        image: button.getAttribute('data-product-image'),
      };
      addToCart(product);
    });
  });

  // Initialize cart count on page load
  updateCart();
});
