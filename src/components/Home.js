// Home.js
import React, { useState } from 'react';
import './Home.css';

// Dummy data for demonstration
const productsData = [
  { id: 1, type: 'Product', name: 'Product 1', image: 'product1.jpg', specifications: 'Specs for Product 1', dimensions: { length: 10, width: 5, height: 3 } },
  { id: 2, type: 'Product', name: 'Product 2', image: 'product2.jpg', specifications: 'Specs for Product 2', dimensions: { length: 8, width: 4, height: 2 } },
  { id: 3, type: 'Product', name: 'Product 3', image: 'product3.jpg', specifications: 'Specs for Product 3', dimensions: { length: 12, width: 6, height: 4 } },
  { id: 4, type: 'Product', name: 'Product 4', image: 'product4.jpg', specifications: 'Specs for Product 4', dimensions: { length: 15, width: 7, height: 5 } },
  { id: 5, type: 'Product', name: 'Product 5', image: 'product5.jpg', specifications: 'Specs for Product 5', dimensions: { length: 11, width: 5, height: 3 } },
  { id: 6, type: 'Product', name: 'Product 6', image: 'product6.jpeg', specifications: 'Specs for Product 6', dimensions: { length: 9, width: 3, height: 2 } },

  { id: 3, type: 'Accessory', name: 'Accessory 1', image: 'accessory1.jpg', specifications: 'Specs for Accessory 1', dimensions: { length: 5, width: 5, height: 1 } },
  { id: 4, type: 'Accessory', name: 'Accessory 2', image: 'accessory2.jpg', specifications: 'Specs for Accessory 2', dimensions: { length: 6, width: 4, height: 2 } },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState('Products');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filterProductsByType = (type) => {
    const filteredProducts = productsData.filter(product => product.type === type);
    return filteredProducts.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  const renderProductCard = (product) => (
    <div key={product.id} className="product-card">
      <img src={`/images/${product.image}`} alt={product.name} />
      <div className="product-details">
        <h3>{product.name}</h3>
        <table className="description-table">
          <tbody>
            <tr>
              <td>Specifications:</td>
              <td>{product.specifications}</td>
            </tr>
            {product.dimensions && (
              <tr>
                <td>Dimensions:</td>
                <td>{`${product.dimensions.length} * ${product.dimensions.width} * ${product.dimensions.height}`}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="home">
      <div className="tabs">
        <button onClick={() => setActiveTab('Products')} className={activeTab === 'Products' ? 'active' : ''}>Products</button>
        <button onClick={() => setActiveTab('Accessories')} className={activeTab === 'Accessories' ? 'active' : ''}>Accessories</button>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="product-grid">
        {activeTab === 'Products' && filterProductsByType('Product').map(renderProductCard)}
        {activeTab === 'Accessories' && filterProductsByType('Accessory').map(renderProductCard)}
      </div>
    </div>
  );
};

export default Home;
