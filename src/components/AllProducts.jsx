import React from 'react'
import Item from './Item'

const AllProducts = ({ products }) => {
    return (
      <div className="all-products-section">
        <h2>Todos los Productos</h2>
        <div className="product-list">
          {products.map((product) => (
            <Item
              key={product.id}
              name={product.name}
              category={product.category}
              subCategory={product.subCategory}
              stock={product.stock}
            />
          ))}
        </div>
      </div>
    );
  };

export default AllProducts