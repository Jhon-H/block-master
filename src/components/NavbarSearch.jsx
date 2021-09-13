import React from 'react';
import styled from 'styled-components';

/* Estilos */
const InputSearch = styled.input`
  display: block;
  width: 85%;
  padding: 1rem 1.2rem;

  border-style: none;
  border-bottom-left-radius: .5rem;
  border-top-left-radius: .5rem;
  background-color: #FFFFFE;
  font-size: 1.6rem;
  color: #000000;
  
  &::placeholder{
    color: #A7A9BE;
  }

  &:focus {
    outline: none;
  }
`;


const ButtonIconSearch = styled.input`
  cursor: pointer;
  display: block;
  width: 15%;
  padding: .85rem;

  border-style: none;
  border-bottom-right-radius: .5rem;
  border-top-right-radius: .5rem;
  font-size: 1.9rem;
  text-align: center;
  background-color: #FED941;

  &:focus {
    outline: none;
  }
`;

const Div = styled.div`
  display: flex;
  width: min(53rem, 33%);
  border: .1rem solid #FED941;
  border-radius: .8rem;
`;


/* Componentes */
class NavbarSearch extends React.Component {

  handleChange = event => {
    this.props.setInputValue(event.target.value);
  }

  handleClick = () => {
    this.props.handleClickSearch();
  }

  render () {
    return (
      <Div>
        <InputSearch
          onChange={this.handleChange}
          value={this.props.value}
          placeholder='Busca tu película favorita'
        />
        <ButtonIconSearch
          value="P"
          onClick={this.handleClick}
          readOnly
        />
        
      </Div>
    )
  }
}

export default NavbarSearch;