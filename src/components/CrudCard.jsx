import React from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CrudEditCard from './CrudEditCard';

/* Estilos */
const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
`;

const Card = styled.div`
  cursor: pointer;
  position: relative;
  width: 18rem;
  height:20rem;
  border-radius: .5rem;
  border: .2rem solid #FFFFFF;
  background-image: url(${props => props.img});
  background-size: contain;
  margin-right: 2rem;

  &:hover {
    .activeBtnDelete {
      background-color: #5c1e1e77;
      color:  #8b1414dc;
      border-color: grey;

      &:hover {
        background-color: #e74545cb;
        color: #6e0505cb;
      }
    }

    .activeBtnEdit {
      background-color: #344a5f80;
      color: #031c33cb;
      border-color: grey;

      &:hover {
        background-color: #0060b9b0;
        color: #000080;
      }
    }
  }
`;

const DivButton = styled.div`
  position: absolute;
  bottom: .3rem;
  right: .5rem;
`;

const Button = styled.button`
  width: 4.9rem;
  height: 2.9rem;
  margin-left: .4rem;
  border: .1rem solid transparent;
  border-radius: .4rem;
  background-color: transparent;
  color: transparent;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 1.7rem;
  margin-right: 2rem;
`;

const Vote = styled(Title)`
  color:  goldenrod;
`;

const MySwal = withReactContent(Swal);

/* Componentes */
class CrudCard extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      title: '',
      bgimg: '',
      votes: '',
      show: false,
      passId: 0,
    }
  }

  handleEdit = event => { 
    this.setState({
      show: true,
      passId: event.target.id
    });
  }

  handleClose = () => { this.setState({show: false}); }

  handleDelete = event => {
    MySwal.fire({
      title: 'Estás seguro? ',
      text: "Esta acción es irrevertible !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, eliminalo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.deleteData(event.target.id);
      }
    });
  }

  render () {
    return (
      <Div>
        <Card img={this.props.img}>
          <DivButton>
            <Button
              className='activeBtnEdit'
              id={this.props.id}
              onClick={this.handleEdit}
              edit
            >
              L
            </Button>
            <Button
              className='activeBtnDelete'
              onClick={this.handleDelete}
              id={this.props.id}
            >
              X
            </Button>
          </DivButton>
        </Card>
        <Info>
          <Title> {this.props.title} </Title>
          <Vote> {this.props.votes} </Vote>
        </Info>
        <CrudEditCard
          show={this.state.show}
          handleClose={this.handleClose}
          editData={this.props.editData}
          id={this.props.id}
          title={this.props.title}
          votes={this.props.votes}
          description={this.props.description}
        />
      </Div>
    )
  }
}

export default CrudCard;