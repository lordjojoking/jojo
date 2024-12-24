document.addEventListener('DOMContentLoaded', () => {
  // Retrieve cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const cartItemsList = document.getElementById('cart-items-list');
  const orderNowButton = document.getElementById('order-now-button');

  // Display cart items
  if (cartItems.length > 0) {
    cartItems.forEach(item => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');

      // Create the product layout as it appears on the homepage
      productDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <div class="product-button">
          <button class="remove-button" data-product-id="${item.id}">Remove</button>
        </div>
      `;
      
      cartItemsList.appendChild(productDiv);

      // Remove product functionality
      const removeButton = productDiv.querySelector('.remove-button');
      removeButton.addEventListener('click', () => {
        const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Save the updated cart to localStorage
        location.reload(); // Reload the page to reflect the changes
      });
    });
  } else {
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'Your cart is empty.';
    cartItemsList.appendChild(emptyMessage);
  }

  // "Order Now" Button functionality
  orderNowButton.addEventListener('click', () => {
    if (cartItems.length > 0) {
      // Save cart data to localStorage
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      // Redirect to the payment page
      window.location.href = 'payment.html'; // Redirects to payment.html
    } else {
      alert('Your cart is empty.');
    }
  });
});
