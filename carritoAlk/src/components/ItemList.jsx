import React from 'react';
import Item from './Item';

function ItemList({ products, addToCart }) {
  return (
    <div className="item-list">
      <h1 id="top">Lista de Productos</h1> {/* Marca para la parte superior */}
      <br />
      <ul>
        {products.map((product) => (
          <Item key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ul>
      <div id="bottom" /> {/* Marca para la sección del carrito */}
    </div>
  );
}

export default ItemList;
