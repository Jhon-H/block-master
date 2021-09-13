import React from 'react';
import styled from 'styled-components';
import MoviesSectionCard from '../components/MoviesSectionCard';


/* Estilos */
const DivMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 4.5rem;
  color: #FFFFFE;
`;

const Div = styled.div`
  background-color: #000000;
  padding: 5rem 7rem;
`;

/* Componentes */
class MoviesSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = { movies: this.props.moviesSort };

    console.log("props: " + this.props.moviesSort);

    if (!this.props.moviesSort.length) {
      console.log("NO PASARON DATOS");
      this.getDataMovies(this.props.searchByName, this.props.value);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchByName !== this.props.searchByName) {
      this.getDataMovies(this.props.searchByName, this.props.value);
    }
    else if (prevProps.moviesSort !== this.props.moviesSort) {
      this.setState({movies: this.props.moviesSort});      
    }
  }

  getDataMovies = (searchByName, name) => {
    const URL_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a4329352bd9a9fb8d7b99ab53da4528f&page=1&language=es';
    const URL_API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=a4329352bd9a9fb8d7b99ab53da4528f&query=${name.replace(' ', '+')}&language=es`;

    fetch((searchByName ? URL_API_SEARCH : URL_API))
      .then(response => response.json())
      .then(response => response.results)
      .then(data => {
        this.setState({ movies: data })
      })
      .catch(error => console.warn("ERROR" + error));

    return true;
  }

  render() {
    const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500';
    return (
      <Div>
        <Title> Todas las películas:  </Title>
        <DivMovies>
          {
            this.state.movies.map(movie =>
              <MoviesSectionCard
                key={movie.id}
                bgImg={(this.props.activeD ? movie.img :IMG_PREFIX + movie.poster_path)}
                score={(this.props.activeD ? movie.votes : movie.vote_average)}
                overview={(this.props.activeD ? movie.description : movie.overview)}
                title={movie.title}
              />
            )
          }
        </DivMovies>
      </Div>
    )
  }
}

export default MoviesSection;