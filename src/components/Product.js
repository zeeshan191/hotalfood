import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>Rs{product.price}</div>
      <div>
      <input type='checkbox' onClick={() => onAdd(product)}/>
        
      </div>
    </div>
  );
}
