import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import MyNavbar from "../Navbar/MyNavbar";
import EmptyCart from './EmptyCart';
import WithItemsCart from './WithItemsCart';

function Cart({ cart, totalItems }) {
  const isEmpty = !cart.length;

  const totalToPay = () =>{
    return cart.reduce((acc, b) => {
      return (b.quantity*b.price)+acc
    },0).toFixed(2)
  }

  return (
      <><MyNavbar totalItems={totalItems}></MyNavbar>
      <Container>
        <div className="Cart row">
          <div className="col-9 d-flex flex-column-reverse">            
            { isEmpty ? <EmptyCart /> : <WithItemsCart cart={cart}/> }
          </div>
          <div className="col-3">
          { isEmpty ? <></> : <>
            <Form>
              <Form.Label>Cupom</Form.Label>
              <Form.Control type="text" placeholder="TULIOVINTAO">
              </Form.Control>
            </Form>
            <div key={cart.uid}>
              <p>R$ {totalToPay()}</p>
            </div>
          </>}    
          </div>
        </div>
      </Container></>
    );
  }
  
  export default Cart;