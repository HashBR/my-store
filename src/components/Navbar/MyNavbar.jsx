import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Badge from 'react-bootstrap/Badge';
import "./mynavbar.css"

function MyNavbar({ totalItems }) {
  return(
      <><Navbar fixed="top" className="navbar navbar-light bg-warning">
      <Container className="container-fluid">
        <NavLink to="/" style={{ textDecoration: 'none' }} className="navbar-brand text-light">Tuloja</NavLink>
        <NavLink to="/cart" style={{ textDecoration: 'none' }} className="text-light me-2"><FaShoppingCart /> Cart <Badge bg="light" text="dark">{totalItems}</Badge></NavLink>
      </Container>
    </Navbar>
    <div className='navbar-height' /></>
  )
}

export default MyNavbar;