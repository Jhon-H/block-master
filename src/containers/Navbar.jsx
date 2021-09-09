import NavbarLinks from '../components/NavbarLinks';
import NavbarSearch from '../components/NavbarSearch';
import styled from 'styled-components';
import NavbarLogo from '../components/NavbarLogo';

/* Estilos */
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 7rem;

  background-color: #000000;
`;


/* Componentes */
function Navbar (props) {
  return (
    <Nav>
      <NavbarLogo />
      <NavbarLinks />
      <NavbarSearch
        setInputValue={props.setInputValue}
        searchMovieByName={props.value}
        handleClickSearch={props.handleClickSearch}
        value={props.value}  
      />
    </Nav>
  );
}

export default Navbar;