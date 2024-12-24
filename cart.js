document.addEventListener('DOMContentLoaded', () => {
  // Define price of each product
  const pricePerItem = 5500;
  
  // Retrieve cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const cartItemsList = document.getElementById('cart-items-list');
  const orderNowButton = document.getElementById('order-now-button');
  const totalPriceElement = document.createElement('p'); // Element to display total price
  totalPriceElement.id = 'total-price'; // Give it an ID for styling
  
  // Display cart items and calculate total price
  let totalPrice = 0; // Variable to accumulate total price

  if (cartItems.length > 0) {
    cartItems.forEach(item => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');

      // Create the product layout
      productDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <div class="product-button">
          <button class="remove-button" data-product-id="${item.id}">Remove</button>
        </div>
      `;

      cartItemsList.appendChild(productDiv);

      // Update the total price
      totalPrice += pricePerItem; // Add the price of this item to the total

      // Remove product functionality
      const removeButton = productDiv.querySelector('.remove-button');
      removeButton.addEventListener('click', () => {
        // Remove item from the cart
        const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Save the updated cart to localStorage
        productDiv.remove(); // Remove the product from the DOM

        // Recalculate the total price
        totalPrice -= pricePerItem; // Subtract the price of the removed item
        totalPriceElement.textContent = `Total Price: ₹${totalPrice}`; // Update the total price displayed
      });
    });

    // Display total price
    totalPriceElement.textContent = `Total Price: ₹${totalPrice}`;
    cartItemsList.appendChild(totalPriceElement);
  } else {
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'Your cart is empty.';
    cartItemsList.appendChild(emptyMessage);
  }

  // "Order Now" Button functionality
  orderNowButton.addEventListener('click', () => {
    if (cartItems.length > 0) {
      // Redirect to the payment page
      window.location.href = 'payment.html'; // Redirects to payment.html
    } else {
      alert('Your cart is empty.');
    }
  });
});
