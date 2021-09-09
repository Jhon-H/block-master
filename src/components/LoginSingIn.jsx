import md5 from 'md5';
import axios from 'axios';
import React from 'react';
import styled from 'styled-components';


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

  &::selection {
    background-color: green;
  }

  &:focus {
    outline: none;
    border-color: dodgerblue;
  }
`;

const SubmitInput = styled(Input)`
  background-color: goldenrod;
  width: 30rem;
  margin: 5rem auto;
  border: .5rem groove goldenrod;

  &:focus {
    outline: none;
    border-color: transparent;
  }
`;



class LoginsignIn extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    /* Si es valido */
    /* Pasar el nombre del usuario al contexto global */
    event.preventDefault();
    alert("Submit Form");
    this.singInUser();
  }

  singInUser = async () => {
    const URL_HEROKU = 'https://block-master-api.herokuapp.com/users';
    const PARAMS = `?user=${this.state.user}&password=${md5(this.state.password)}`;
    axios.get(URL_HEROKU + PARAMS)
      .then(response => response.data)
        .then(response => {
          console.log((response[0] ? "Bienvenido " + response[0].first_name : "Usuario o Contraseña inválidos"
          ));
        })
        .catch(error => console.error("ERROR" + error));
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="email"
          name="user"
          value={this.state.user}
          onChange={this.handleChange}
          placeholder="Usuario"
          autoComplete="off"
          required
        />

        <Input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Contraseña"
          autoComplete="off"
          required
        />

        <SubmitInput
          type="submit"
          value="Ingresar"
        />

      </Form>
    )
  }
}

export default LoginsignIn;

/*
- Cambiar entre registrar e ingresar
- Que se envie la contraseña cifrada (login y register)
*/


/*
  Que se pase el usuario o el i o algo al contexto global, para poder guardar datos
  Que si el usuario existe, me redirecicone a la pagina principal

  SUBIR Y ENVIAR

  Que muestre data cuando presione cards
  Que sirvan los botoens de filtrar, buscar, etc
  ENrutamiento
  Que se pueda guardar ver luego en usuario, que se pueda eliminar esa informacion

  Que el usuario pueda subir peliculas (apareceran de primeras en TODOS, y seun su rango en las demas)
  Que pueda eliminar, edit, etc pelicuals que subio
  Que se pueda ver trailer de pelicula
  Design de todo todo todo
  Responsivo
  Terminar lo que falte (scroll infinito, pagina 404, no founds results, redireccion)
*/