import React from 'react';
import Item from './Item';

function ItemList({ products, addToCart }) {
  return (
    <div className="item-list">
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <Item key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
