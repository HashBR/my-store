import React from 'react'
import carouselwoman from "../images/carousel-woman.jpg"
import Container from 'react-bootstrap/esm/Container';

const MyCarousel = () => {
  return (
  <>
    <div className='carousel-root'>
      <Container>
        <div className='justify-content-md-center row'>
          <div className='d-none d-sm-block d-flex justify-content-between col-12'>
            <div className='carousel-center'>
              <img className="w-50" src={carouselwoman} alt="Tuloja Banner"/>
              <img className="w-50 img-inverted" src={carouselwoman} alt="Tuloja Banner"/>
              <div className='carousel-text d-flex flex-column justify-content-center w-100'>
                <h2 className='text-center text-white'>Bem-Vinda(o) à Tuloja</h2>
                <p className='text-center text-white font-weight-bold'>A loja de maquiagem feita por quem não entende de maquiagem.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
    
    </>
  )
}

export default MyCarousel
