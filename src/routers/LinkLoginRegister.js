import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


/* Estilos */
const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 7rem;

  li {
    display: block;
    margin-right: 3rem;
    font-size: 2rem;
    color: #EEEEEF;
    text-decoration: none;
  }

  .selected {
    li {
      color: dodgerblue;
      text-decoration: underline;
    }
  }
`;


/* Componentes */
const LinkLoginRegister = () => {
  return (
    <div>
      <Ul>
        <NavLink activeClassName="selected" to="/register" id="nav-link" exact>
          <li> Registrarse </li>
        </NavLink>
        <NavLink activeClassName="selected" to="/" id="nav-link" exact>
            <li> Ingresar  </li>
        </NavLink>
      </Ul>
    </div>
  )
}

export default LinkLoginRegister;