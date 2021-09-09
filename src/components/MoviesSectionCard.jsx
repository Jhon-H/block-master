import React from 'react';
import styled from 'styled-components';


/* Estilos */
const Card = styled.div`
  cursor: pointer;
  width: 22rem;
  height: 33rem;
  background-image: url(${props => props.bgImg});
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 2rem;
  margin-right: 1.2rem;
  margin-left: 1.2rem;
`;

const Score = styled.p`
  width: 50%;
  padding: .5rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  border-width: .2rem;
  border-style: solid;
  border-color: ${props => props.score >= 5 ? '#FED941' : '#0E3FA9'};
  color: #FFFFFF;
`;

const Start = styled.i`
  color: #FED941;
  margin-right: .8rem;
`;

/* Componentes */
function MoviesSectionCard (props) {
  return (
    <Card bgImg={props.bgImg}>
      <Score score={props.score}>
        <Start className='fas fa-star'></Start>
        {props.score}
      </Score>
    </Card>
  );
}

export default MoviesSectionCard;