import Container from 'react-bootstrap/Container';
import MyNavbar from "../Navbar/MyNavbar";
import CartItem from './CartItem';

function Cart({ cart, totalItems }) {
  const isEmpty = !cart.length;

  const EmptyCart = () => (
    <span>Você esta com o carrinho vazio!</span> 
  );

  const WithItemsCart = () => (
    <>
      <div className="col">
      {cart.map((cart) => (
        <div key={cart.uid}>
          <CartItem cart={cart}></CartItem>       
        </div>
      ))}
        <span>Total de items no carrinho: {cart.length}</span>
      </div>
    </>
  );

    return (
      <><MyNavbar totalItems={totalItems}></MyNavbar>
      <Container>
        <div className="Cart row">
          <div className="col-12">
            { isEmpty ? <EmptyCart /> : <WithItemsCart /> }
          </div>
        </div>
      </Container></>
    );
  }
  
  export default Cart;
  