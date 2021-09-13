import React from 'react';
import styled from 'styled-components';

/* Estilos */
const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 3rem;
`;

const Description = styled.p`
  font-size: 2rem;
`;

const Div = styled.div`
  padding: 5rem;
`;


/* Componentes */
class Preview extends React.Component {
  render () {
    return (
      <Div>
        <Title> {this.props.title} </Title>
        <Description> {this.props.overview} </Description>
        <p> video </p>
      </Div>
    )
  }
}

export default Preview;