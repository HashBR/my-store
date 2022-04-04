import React from 'react'

const CartItem = ({ cart }) => {
  return (
    <div className="hover-shadow cart-item">
      <div className="cart-item-image">
        <img src={cart.img} alt={cart.name}></img>
      </div>
      <div className="product-title">
        <span>{cart.name}</span>
      </div>
      <div className="cart-item-quantity">
        <span>{cart.quantity}</span>
      </div>
      <div className="cart-item-total">
        <span>{(cart.price*cart.quantity).toFixed(2)}</span>
      </div>
    </div>
  )
}

export default CartItem