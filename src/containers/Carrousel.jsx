import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import DEPRUEBA1 from '../img/DEPRUEBA1.svg';
import DEPRUEBA2 from '../img/DEPRUEBA2.svg';
import DEPRUEBA3 from '../img/DEPRUEBA3.svg';
import styled from 'styled-components';


/* TODO:
- NOTA: LAS IMAGENES DEBEN SER CARGADAS DESDE LA API
- LOS BOTONES DEBEN SER FUNCIONALES
*/

/* Estilos */
const Div = styled.div`
  padding: 5rem 7rem;
  background-color: #000000;
`;


/* Componentes */
function Carrousel() {
  return (
    <Div id='carouselExampleIndicators' className='carousel slide' data-bs-ride='carousel'>
      <div className='carousel-indicators'>
        <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
        <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2'></button>
        <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3'></button>
      </div>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src={DEPRUEBA1} className='d-block w-100' alt='...' />
        </div>
        <div className='carousel-item'>
          <img src={DEPRUEBA2} className='d-block w-100' alt='...' />
        </div>
        <div className='carousel-item'>
          <img src={DEPRUEBA3} className='d-block w-100' alt='...' />
        </div>
      </div>
    </Div>
  )
}


export default Carrousel;