import React from 'react';
import styled from 'styled-components';
import CrudAddForm from './CrudAddForm';

/* Estilos */
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 18rem;
  height:20rem;

  border: .5rem dashed gray;
  border-radius: 1rem;
  margin-right: 2rem;

  &:hover{
    border-color: black;
  }
`;

const Add = styled.a`
  font-size: 8rem;
  font-weight: bold;
  color: gray;
  text-decoration: none;

  &:hover{
    color: black;;
  }
`;


/* Componentes */
class CrudAddCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  handleClose = () => this.setState({ show: false });

  handleShow = () => { this.setState(state => ({ show: !state.show })); }

  render() {
    return (
      <Card>
        <Add onClick={this.handleShow}> + </Add>
        <CrudAddForm
          handleClose={this.handleClose}
          show={this.state.show}
          handleAdd={this.props.handleAdd}  
          postData={this.props.postData}
          idUser={this.props.idUser}
        />
      </Card>
    )
  }
}

export default CrudAddCard;