import React from 'react';
import styled from 'styled-components';



/* Estilos */
const A = styled.button`
  cursor: pointer;
  font-weight: bold;
  font-size: 1.6rem;
  color: ${props => props.active ? '#FED941' : 'black'};
  text-decoration: ${props => props.active ? 'underline' : 'none'};
`;



/* Componentes */
class NavbarLinks extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      activeA: true,
      activeB: false,
      activeC: false
    }
  }

  handleCLick = event => {
    const resetStateVales = {};
    const name = event.target.name;
    const keys = Object.keys(this.state);
    
    keys.forEach(key => (
      resetStateVales[key] = (name === key)
    ));

    this.setState(resetStateVales);
  }

  render () {
    return (
      <div>
        <A
          name='activeA'
          onClick={this.handleCLick}
          active={this.state.activeA}>
          Todas
        </A>

        <A
          name='activeB'
          onClick={this.handleCLick}
          active={this.state.activeB}>
          Más valoradas
        </A>

        <A
          name='activeC'
          onClick={this.handleCLick}
          active={this.state.activeC}>
          Menos valoradas
        </A>
      </div>
    );
  }
}


export default NavbarLinks;