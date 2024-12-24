document.addEventListener('DOMContentLoaded', () => {
  // Retrieve cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const cartItemsList = document.getElementById('cart-items-list');
  const orderNowButton = document.getElementById('order-now-button');

  // Calculate the total price (5500 per item)
  const pricePerItem = 5500;
  const totalPrice = cartItems.length * pricePerItem;

  // Save the total price in localStorage
  localStorage.setItem('totalPrice', totalPrice);

  // Display cart items
  if (cartItems.length > 0) {
    cartItems.forEach(item => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');

      productDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <div class="product-button">
          <button class="remove-button" data-product-id="${item.id}">Remove</button>
        </div>
      `;
      
      cartItemsList.appendChild(productDiv);

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
      window.location.href = 'payment.html'; // Redirect to the payment page
    } else {
      alert('Your cart is empty.');
    }
  });
});
