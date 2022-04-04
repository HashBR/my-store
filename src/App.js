import { useState, useEffect } from "react";
import AppRoutes from "./AppRoutes";
import {v4 as uuidv4} from 'uuid'

function App() {
  const [totalCart, setTotalCart] = useState(0);
  const [cart, setCart] = useState([]);
  
  // Vai fazer assim que iniciar
  useEffect(() =>{
    console.log("Iniciou")
  }, []);

  // Sempre que clicar em um produto para add no cart
  const handleAddToCart = ( productId, name, img, price, quantity ) => {
    setTotalCart(totalCart + 1)
    const found = cart.find((item)=> (item.productId === productId)) 
    if(found) {
      found.quantity++     
    } else {
      // Pega o anterior, e adiciona mais um elemento
      setCart([...cart, {uid: uuidv4(), productId: productId, name: name, img: img, price: price, quantity: quantity}]
      );
    }
  }

  //Faz toda vez que o objeto cart tem alteração
  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <AppRoutes totalItems={totalCart} onAddToCart={handleAddToCart} cart={cart} ></AppRoutes>
    </div>
    );
  }
  
  export default App;
  