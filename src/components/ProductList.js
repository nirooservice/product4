// ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, category: 'pump', name: 'Pump 1', image: 'pump1.jpg' },
  { id: 2, category: 'pump', name: 'Pump 2', image: 'pump2.jpg' },
  { id: 3, category: 'accessory', name: 'Accessory 1', image: 'accessory1.jpg' },
  { id: 4, category: 'accessory', name: 'Accessory 2', image: 'accessory2.jpg' },
];

export const ProductList = () => {
  return (
    <div>
      <h3>All Products</h3>
      <div className="product-list">
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="product-card">
              <img src={`/images/${product.image}`} alt={product.name} />
              <p>{product.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
