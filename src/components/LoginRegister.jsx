import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


/* Estilos */
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: min(50%, 70rem);
  background-color: #000000;
`;

const Input = styled.input`
  padding: .5rem;
  margin-bottom: 1.5rem;
  background-color: #000000;
  border: none;
  border-bottom: .3rem solid goldenrod;
  color: white;
  font-size: 2rem;

  &::selection {
    background-color: gray;
  }

  &:focus {
    outline: none;
    border-color: dodgerblue;
  }
`;

const SubmitInput = styled(Input)`
  background-color: goldenrod;
  width: 30rem;
  margin: 2rem auto;
  border: .5rem groove goldenrod;

  &:focus {
    outline: none;
    border-color: transparent;
  }

  cursor: pointer;
`;

const MySwal = withReactContent(Swal);


/* Componentes */
class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      secondName: '',
      lastName: '',
      user: '',
      password: '',
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const keys = Object.keys(this.state);
    const resetedState = {};
    const URL_HEROKU = 'https://block-master-api.herokuapp.com/users';

    axios.get(URL_HEROKU)
      .then(response => {
        const exist = response.data.some(user => user.user === this.state.user);
        if (exist) this.alreadyUserExist();
        else this.registerUser();
        console.log(response.data);
        keys.forEach(key => resetedState[key] = '');
        this.setState(resetedState);
      });
  }

  alreadyUserExist = () => {
    MySwal.fire({
      title: 'Este usuario ya existe',
      icon: 'error',
      showCancelButton: false,
      confirmButtonColor: 'tomato',
      confirmButtonText: 'Entendido',
    });
  }

  registerUser = async () => {
    const URL_HEROKU = 'https://block-master-api.herokuapp.com/users';

    axios.post(URL_HEROKU, {
      id: uuidv4(),
      firstName: this.state.firstName,
      secondName: this.state.secondName,
      lastName: this.state.lastName,
      user: this.state.user,
      password: this.state.password,
      movies: []

    }).then(response => {
      MySwal.fire({
        title: 'Registrado corretamente',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Entendido',
      });
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          placeholder="Primer Nombre"
          autoComplete="off"
          required
        />

        <Input
          name="secondName"
          value={this.state.secondName}
          onChange={this.handleChange}
          placeholder="Segundo Nombre"
          autoComplete="off"
        />

        <Input
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
          placeholder="Apellidos"
          autoComplete="off"
          required
        />

        <Input
          type="email"
          name="user"
          value={this.state.user}
          onChange={this.handleChange}
          placeholder="Email"
          autoComplete="off"
          required
        />

        <Input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password"
          autoComplete="off"
          required
        />

        <SubmitInput
          type="submit"
          value="Registrarse"
        />
      </Form>
    )
  }
}

export default LoginRegister;
