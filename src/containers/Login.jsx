import React from 'react';
import LoginRegister from "../components/LoginRegister";
import LoginsignIn from "../components/LoginSingIn";
import styled from "styled-components";
const ENRUTAMIENTO = false;

/* Estilos */
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
`;


/* Componentes */
function Login () {
  return (
    <Div>
      {
        (ENRUTAMIENTO 
          ? <LoginRegister />
          : <LoginsignIn />
        )
      }
    </Div>
  )
}

export default Login;