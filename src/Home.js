import Container from "react-bootstrap/esm/Container";
import MyNavbar from "./components/Navbar/MyNavbar";
import './home.css';

import Products from "./components/products/Products";
import MyCarousel from "./components/Carousel/MyCarousel";

// export const Home = () => {
//   return (
function Home({ onAddToCart, totalItems }) {
  return (
    <><MyNavbar totalItems={totalItems}></MyNavbar>
    <MyCarousel></MyCarousel>
    <Container className="px-4 py-4">
      <div className="row gx-2 gy-3 justify-content-center">
        <Products onAddToCart={onAddToCart}/>
      </div>
    </Container>     
    </>
  );
}
  
  export default Home;