import React from 'react'

const CartItem = ({ cart }) => {
  return (
    <a className="hover-shadow cart-item">
      <div className="product-title">
        <span>Insira nome aqui</span>
      </div>
      <div className="cart-item-image">
        <span>{cart.productId}</span>
      </div>
      <div className="cart-item-quantity">
        <span>{cart.quantity}</span>
      </div>
    </a>
  )
}

export default CartItem