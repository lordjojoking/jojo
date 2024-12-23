
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartCount = document.getElementById('cart-count');
    const cartModal = document.getElementById('cart-modal');
    const cartList = document.getElementById('cart-items');
  
    const updateCart = () => {
      cartCount.textContent = cartItems.length;
      cartList.innerHTML = '';
      cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
      });
      cartModal.style.display = cartItems.length ? 'block' : 'none';
    };
  
    const addToCart = (product) => {
      cartItems.push(product);
      updateCart();
      alert(`${product} has been added to your cart.`);
    };
  
    document.querySelectorAll('.cart-button').forEach(button => {
      button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        addToCart(product);
      });
    });
  
    document.getElementById('cart-button').addEventListener('click', () => {
      cartModal.style.display = cartModal.style.display === 'none' ? 'block' : 'none';
    });
  });
  
  function clearCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    document.getElementById('cart-count').textContent = '0';
    document.getElementById('cart-modal').style.display = 'none';
  }
  