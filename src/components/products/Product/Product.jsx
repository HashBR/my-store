import React from 'react'
import { FaCartPlus } from 'react-icons/fa';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="hover-shadow store-item"><div onClick={() => onAddToCart(product.id, product.name, product.img, 1)}>
      <div>
        <div className="product-title">
          <h6 className="fw-bold">{product.name}</h6>
        </div>
        <div className="product-image">
          <img src={product.img} alt={product.id}></img>
        </div>
        <div className="product-desc">
          <span className='fs-6 text'>{product.desc}</span>
        </div>
        <div className="text-warning border-top border-warning product-price">
          <s className="text-warning text-opacity-50 fs-6 text">R$ {product.oldprice}</s>
          <span className="text-warning fw-bold fs-5 text">R$ {product.price}</span>
        </div>   
      </div>
      <div className='add-to-cart fade'>
        <FaCartPlus size={100} color="#ffc107"/>
        <span className="text-warning fw-bold fs-1 text">R$ {product.price}</span>
      </div>
    </div></div>
  )
}

export default Product