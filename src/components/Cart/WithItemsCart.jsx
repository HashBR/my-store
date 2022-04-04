import React from 'react'
import CartItem from './CartItem';

const WithItemsCart = ( { cart } ) => (
  <>
    <div className="col">
      <div className="cart-list-header">
        <div className="">
          <span>Imagem</span>
        </div>
        <div className="">
          <span>Nome</span>
        </div>
        <div className="">
          <span>Quantidade</span>
        </div>
        <div className="">
          <span>Total</span>
        </div>
      </div>
    {cart.map((cart) => (
      <div key={cart.uid}>
        <CartItem cart={cart}></CartItem>       
      </div>
    ))}
      <span className='border-top border-warning'>Total de items no carrinho: {cart.length}</span>
    </div>
  </>
);

export default WithItemsCart