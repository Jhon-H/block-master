import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import DEPRUEBA1 from '../img/DEPRUEBA1.svg';
import DEPRUEBA2 from '../img/DEPRUEBA2.svg';
import DEPRUEBA3 from '../img/DEPRUEBA3.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

/* TODO:
- NOTA: LAS IMAGENES DEBEN SER CARGADAS DESDE LA API
- LOS BOTONES DEBEN SER FUNCIONALES
*/

/* Estilos */
const Div = styled(Carousel)`
  padding: 5rem 7rem;
  background-color: #000000;
`;


/* Componentes */
function Carrousel() {
  return (
    <Div slide>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={DEPRUEBA1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={DEPRUEBA2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={DEPRUEBA3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Div>
  )
}

export default Carrousel;