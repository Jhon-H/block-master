import React from 'react';
import Navbar from '../containers/Navbar';
import Carrousel from '../containers/Carrousel';
import MoviesSection from '../containers/MoviesSection';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      searchByName: false,
      moviesSort: [],
      activeD: false
    }
  }

  sortMovies = (name, apiSort) => {
    if (name === 'activeD') {
      axios.get(apiSort)
        .then(response => response.data)
        .then(data => {
          console.log(data.movies);
          this.setState({
            moviesSort: data.movies,
            activeD: true
          })
        })
    } else {
      fetch(apiSort)
        .then(response => response.json())
        .then(response => response.results)
        .then(data => {
          console.log(data);
          this.setState({ 
            moviesSort: data,
            activeD: false
          })
        })
        .catch(error => console.warn("ERROR" + error));
    }
  }

  setInputValue = value => {
    const cleanSearch = (this.state.inputValue !== '' && value === '');
    this.setState({
      inputValue: value,
      searchByName: (cleanSearch ? false : this.state.searchByName)
    });
  }

  handleClickSearch = () => {
    if (this.state.inputValue !== '' && !this.state.searchByName) {
      this.setState({ searchByName: true });
    }
  }

  render() {
    console.log(this.props.userName + "    " + this.props.idUser);
    return (
      <div>
        <Navbar
          setInputValue={this.setInputValue}
          handleClickSearch={this.handleClickSearch}
          value={this.state.inputValue}
          nameUser={this.props.userName}
          idUser={this.props.idUser}
          sortMovies={this.sortMovies}
        />
        <Carrousel />
        <MoviesSection
          searchByName={this.state.searchByName}
          value={this.state.inputValue}
          moviesSort={this.state.moviesSort}
          activeD={this.state.activeD}
        />
      </div>
    );
  }
}

export default App;