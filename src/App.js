import { useState, useEffect } from "react";
import AppRoutes from "./AppRoutes";
import {v4 as uuidv4} from 'uuid'

function App() {
  const [totalCart, setTotalCart] = useState(0);
  const [cart, setCart] = useState([]);
  // Vai fazer assim que iniciar
  useEffect(() =>{
    //Algo que faz quando abre página
    console.log("Iniciou")
  }, []);

  const handleAddToCart = ( productId, quantity ) => {
    // debugger
    setTotalCart(totalCart + 1)
    const found = cart.find((item)=> (item.productId === productId)) 
    if(found) {
      found.quantity++     
    } else {
      // Pega o anterior, e adiciona mais um elemento
      setCart(oldCart => {
        return [...oldCart, {uid: uuidv4(), productId: productId, quantity: quantity}]
      });
    }
    console.log(totalCart)
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <AppRoutes totalItems={totalCart} onAddToCart={handleAddToCart} cart={cart} ></AppRoutes>
    </div>
    );
  }
  
  export default App;
  