import React from 'react';
import logo from '../img/logo.svg';
import styled from 'styled-components';

/* Estilos */
const Logo = styled.img`
  display: block;
  width: 18rem;
  height: 12rem;
`;


/* Componentes */
function NavbarLogo () {
  return (
    <Logo src={logo} alt='Logo block-master' />
  );
}

export default NavbarLogo;