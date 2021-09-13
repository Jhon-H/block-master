import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import '../index.css';


/* Estilos */
const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(50%, 50rem);
  margin: 4rem auto;
`;

const FormData = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.7rem;
  width: 100%;
`;

const Input = styled.input`
  font-size: 2rem;
  padding: ${props => !props.file ? '.5rem 1rem' : '.5rem 0rem'};
`;

const Label = styled.label`
  width: 15rem;
  font-size: 2.2rem;
  margin-bottom: .6rem;
`;

const ModalS = styled(Modal)`
  background-color: #000000;
  .custom-dialog {
    max-width: 90%!important;
  }
`;

const ModalHeader = styled(Modal.Header)`
  font-size: 3rem;
  font-weight: bold;
  margin: auto;
  padding: 0 5rem;
`;

const TextArea = styled.textarea`
  font-size: 2rem;
  padding: .5rem 1rem;
  resize: vertical;
`;

const ButtonStyle = styled(Button)`
  width: fit-content;
  padding: 1rem 2rem;
  font-size: 2rem;
  margin-left: 1.5rem;
  background-color: ${props => props.add ? 'gold' : "gray"};
  border-color:  ${props => props.add ? 'goldenrod' : "black"};
  
  &:hover {
    background-color: ${props => props.add ? 'gold' : "gray"};
  }

  &:active {
    background-color: ${props => props.add ? 'gold' : "gray"};
  }

  &:focus  {
    background-color: ${props => props.add ? 'gold' : "gray"};
  }
`;

/* Componentes */
class CrudAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      votes: '',
      img: null,
      description: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.img);
    this.props.postData(this.state);

    this.setState({
      name: '',
      votes: '',
      img: null,
      description: '',
    });

    this.props.handleClose();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleFileChange = event => {
    this.setState({img: event.target.files[0]});
  }

  render() {
    return (
      <ModalS
        show={this.props.show}
        onHide={this.props.handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName='custom-dialog'
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader> Agrega una Película </ModalHeader>
        <FormStyle onSubmit={this.handleSubmit}>
          <Modal.Body >
            <FormData>
              <Label htmlFor="title"> Nombre:</Label>
              <Input
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                placeholder="Ingresa el nombre"
                required
              />
            </FormData>

            <FormData>
              <Label htmlFor="votes"> Votos: </Label>
              <Input
                type="number"
                min='0'
                max='10'
                step="0.1"
                name="votes"
                value={this.state.votes}
                onChange={this.handleChange}
                placeholder="Ingresa la valoracion (0-10)"
                required />
            </FormData>

            {/* <FormData>
              <Label htmlFor="preview"> Preview: </Label>
              <Input
                type="file"
                name="preview"
                onChange={this.handleChange}
                value={this.state.preview}
                accept="video/*"
                required
                file
              />
            </FormData> */}

            <FormData>
              <Label htmlFor="imagen"> Imagen: </Label>
              <Input
                type="file"
                name="img"
                onChange={this.handleFileChange}
                accept="image/*"
                required
                file
              />
            </FormData>

            <FormData>
              <Label htmlFor="description"> Descripcion: </Label>
              <TextArea
                name="description"
                onChange={this.handleChange}
                placeholder="Ingresa la descripción"
                value={this.state.description}
                required
              />
            </FormData>
          </Modal.Body>
          <Modal.Footer>
            <ButtonStyle variant="secondary" onClick={this.props.handleClose}> Cancel </ButtonStyle>
            <ButtonStyle type="submit" variant="primary" add="true"> Add </ButtonStyle>
          </Modal.Footer>
        </FormStyle>
      </ModalS>
    )
  }
}

export default CrudAddForm;