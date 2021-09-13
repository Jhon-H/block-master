import React from 'react';
import styled from 'styled-components';
import NavbarLogo from '../components/NavbarLogo';
import NavbarLinks from '../components/NavbarLinks';
import NavbarSearch from '../components/NavbarSearch';

/* Estilos */
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 7rem;

  background-color: #000000;

  @media (max-width: 700px){
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;

/* Componentes */
class Navbar extends React.Component {
  render () {
    return (
      <Nav>
        <NavbarLogo />
        <NavbarLinks
          nameUser={this.props.nameUser}
          idUser={this.props.idUser}
          sortMovies={this.props.sortMovies}
        />
        <NavbarSearch
          setInputValue={this.props.setInputValue}
          searchMovieByName={this.props.value}
          handleClickSearch={this.props.handleClickSearch}
          value={this.props.value}  
        />
      </Nav>
    );
  }
}

export default Navbar;