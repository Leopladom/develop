// Cart.jsx
import React from 'react';

function Cart({ cartItems, increaseQuantity, decreaseQuantity, removeItem }) {
  return (
    <div className="cart" id="bottom"> {/* Agregamos un ID para anclar al carrito */}
      <h2>Carrito de Compras</h2>
      <ul className="cart-items">
        {cartItems.map((item, index) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <span>
              {item.name} - ${item.price} - Cantidad: {item.quantity}
            </span>
            <div className="quantity-buttons">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <br />
              <button onClick={() => removeItem(item.id)}>x</button>
            </div>
          </li>
        ))}
      </ul>
      <br />
      <div className="purchase-btn-container">
        <button className="purchase-btn">Realizar Compra</button>
      </div>
    </div>
  );
}

export default Cart;
