import React from 'react'

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="hover-shadow store-item"><a href="#" onClick={() => onAddToCart(product.id, product.name, product.img, 1)}>
      <div className="product-title">
        <h6 className="fw-bold">{product.name}</h6>
      </div>
      <div className="product-image">
        <img src={product.img} alt={product.id}></img>
      </div>
      <div className="product-desc">
        <span className='fs-6 text'>{product.desc}</span>
      </div>
      <div className="text-warning border-top product-price">
        <s className="text-warning text-opacity-50 fs-6 text">R$ 69,99</s>
        <span className="text-warning fw-bold fs-5 text">R$ {product.price}</span>
      </div>   
    </a></div>
  )
}

export default Product