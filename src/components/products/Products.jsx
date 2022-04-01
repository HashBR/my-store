import React from "react";
import Product from "./Product/Product";
import esponja from "../images/esponja.png"
import paleta from "../images/paleta.png"
import pincelbase from "../images/pincelbase.png"
import base from "../images/base.png"
import corretivo from "../images/corretivo.png"
import baton from "../images/batom.png"
import bruma from "../images/bruma.png"
import mascaracilios from "../images/mascaracilios.png"
import paletasombra from "../images/paletasombra.png"
import potranslucido from "../images/potranslucido.png"

const products = [
  {id :1, name: 'Esponja de Maquiagem', img: esponja, desc: "Macia e flexível, é um aplicador multifuncional que traz a praticidade que você precisa", price: "59.99", oldprice: "69.99"},
  {id :2, name: 'Paleta de Blush', img: paleta, desc: "Perfeita para você que ama blush e iluminador, com tons que deixam sua pele sofisticada", price: "89.99", oldprice: "99.99"},
  {id :3, name: 'Pincel para base', img: pincelbase, desc: "Com cerdas densas, finas e levemente cônicas, o pincel é ideal para aplicação da base, cremes e primers", price: "24.99", oldprice: "27.99"},
  {id :4, name: 'Base', img: base, desc: "Com efeito natural, com alta fixação, boa pigmentação na pele, e confortável no rosto para qualquer ocasião", price: "69.99", oldprice: "75.99"},
  {id :5, name: 'Corretivo', img: corretivo, desc: "Corrige imperfeições do rosto como olheiras, manchas e acne, proporcionando um acabamento natural e sem brilho", price: "35.99", oldprice: "40.00"},
  {id :6, name: 'Baton', img: baton, desc: "Chocolate gostoso que diminui com o passar dos anos", price: "29.99", oldprice: "99.99"},
  {id :7, name: 'Bruma', img: bruma, desc: "Cria uma fina camada de hidratação, podendo ser usada antes da make protegendo a pele para receber os produtos", price: "56.99", oldprice: "52.99"},
  {id :8, name: 'Máscara de Cílios', img: mascaracilios, desc: "Pincel super prático para quem procura cílios alongados, com as cerdas do pincel pequena facilita a aplicação na raiz dos cílios", price: "34.99", oldprice: "36.99"},
  {id :9, name: 'Paleta de Sombra', img: paletasombra, desc: "Sombra de qualidade, com alta pigmentação e em varios tons para criar todos os tipos de makes", price: "122.99", oldprice: "149.99"},
  {id :10, name: 'Pó Translúcido', img: potranslucido, desc: "Super fino proporcionando uma acabamento bem suave e natural na sua make", price: "10.99", oldprice: "14.99"},
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