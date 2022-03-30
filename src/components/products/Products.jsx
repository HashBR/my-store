import React from "react";
import Product from "./Product/Product";
import esponja from "../images/esponja.jpg"

const products = [
  {id :1, name: 'Esponja de Maquiagem', img: esponja, desc: "Coisa de maquiagem que eu não sei pra que serve.", price: "59.99"},
  {id :2, name: 'Píncel de Blush', img: esponja, desc: "Coisa de maquiagem que eu não sei pra que serve.", price: "19.99"},
  {id :3, name: 'Píncel de base', img: esponja, desc: "Coisa de maquiagem que eu não sei pra que serve.", price: "24.99"},
  {id :4, name: 'Base', img: esponja, desc: "Coisa de maquiagem que eu não sei pra que serve.", price: "69.99"},
  {id :5, name: 'Corretivo', img: esponja, desc: "Coisa de maquiagem que eu não sei pra que serve.", price: "35.99"},
  {id :6, name: 'Batom', img: esponja, desc: "Coisa de maquiagem que eu não sei pra que serve.", price: "29.99"},
  {id :7, name: 'Bruma', img: esponja, desc: "Coisa de maquiagem que eu não sei pra que serve.", price: "56.99"},
  {id :8, name: 'Máscara de Cílios', img: esponja, desc: "Coisa de maquiagem que eu não sei pra que serve.", price: "34.99"},
  {id :9, name: 'Paleta de Sombra', img: esponja, desc: "Coisa de maquiagem que eu não sei pra que serve.", price: "122.99"},
  {id :10, name: 'Pó Translúcido', img: esponja, desc: "Coisa de maquiagem que eu não sei pra que serve.", price: "10.99"},
]

const Products = ({ onAddToCart }) =>{
  return (
      <>
      {products.map((product) => (
        <div key={product.id} className="box-el col-12 col-sm-6 col-md-4 col-lg-3">
          <Product product={product} onAddToCart={onAddToCart}/>
        </div>
      ))}
      </>
  )
}

export default Products;