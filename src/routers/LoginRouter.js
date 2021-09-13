import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route, 
  Switch,
} from 'react-router-dom';
import LoginRegister from '../components/LoginRegister';
import LoginsignIn from '../components/LoginSingIn';
import App from './App';
import Error404 from '../containers/Error404';
import styled from 'styled-components';
import LinkLoginRegister from './LinkLoginRegister';
import Crud from '../containers/Crud';


/* ESTILOS */
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  width: fit-content;

  min-height: 100vh;
  height: fit-content;
  background-color: #000000;
`;


/* Componentes */
class LoginRouter extends React.Component {
  constructor (props) {
    super(props);
    this.state = { loggeIn: false, user: "", id: -1};
  }

  handleLoggin = (nameUser, idUser) => {    
    this.setState({
      loggeIn: true,
      user: nameUser,
      id: idUser
    })
  }

  render () {
    const loggedIn = this.state.loggeIn;
    return (
      <Router>
        <Div>
          {!loggedIn && <LinkLoginRegister />}
          <Switch>
              <Route exact path="/register" component={LoginRegister} />
              <Route
                exact
                path="/"
                children={<LoginsignIn handleLoggin={this.handleLoggin}/>}
              />
              {loggedIn &&
                <Route
                  exact
                  path="/app"
                  children={<App userName={this.state.user} idUser={this.state.id} />}
                />
              }
              {loggedIn &&
                <Route
                  exact
                  path="/crud"
                  children={<Crud idUser={this.state.id} />}
                />
              }
              <Route path="*" component={Error404} />
          </Switch>
          {loggedIn &&  <Redirect exact to="/app" />}
        </Div>
      </Router>
    )
  }
}

export default LoginRouter;