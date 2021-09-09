import React from 'react';
import Navbar from './containers/Navbar';
import Carrousel from './containers/Carrousel';
import MoviesSection from './containers/MoviesSection';

/*
- Haga busqueda con click
- al borrar todo haga busqueda normal
- login
*/

/*
  TODO: Cambiar el arbol de props, por API context o composicion
*/

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
      searchByName: false
    }
  }

  setInputValue = value => {
    this.setState({
      inputValue: value,
      searchByName: false
    });
  }

  handleClickSearch = () => {
    if(this.state.inputValue !== ''){

      console.log(this.state.searchByName)
      this.setState({
        searchByName: true
      });
    }
  }

  render () {
    return (
      <>
        <Navbar
          setInputValue={this.setInputValue}
          handleClickSearch={this.handleClickSearch}
          value={this.state.inputValue}
        />
        <Carrousel />
        <MoviesSection
          searchByName={this.state.searchByName}
          value={this.state.inputValue}
        />
      </>
    );
  }
}

export default App;