import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


/* Estilos */
const A = styled.a`
  cursor: pointer;
  display: flex;
  font-weight: bold;
  font-size: 1.6rem;
  text-decoration: ${props => props.active ? 'underline' : 'none'};
  color: ${props => props.active ? '#FED941' : '#FFFFFF'};
  transition: color .1s ease-in-out;
  
  margin-right: 2rem;
  &:hover {
    color: ${props => props.active ? '#FED941' : '#fff8d1'};
  }
  
  @media (max-width: 700px){
    margin-bottom: 1rem;
  }
`;

const Div = styled.div`
  display: flex;

  @media (max-width: 700px){
    flex-direction: column;
    margin-bottom: 3rem;
    margin-top: 3rem;
  }
`;

const LinkStyle = styled(Link)`
  cursor: pointer;
  font-size: 1.6rem;
  color: dodgerblue;
  transition: color .1s ease-in-out;

  &:hover{
    color: gray;
    text-decoration: underline;
  }
  
  @media (max-width: 700px){
    margin-bottom: 1rem;
  }
`;

/* Componentes */
class NavbarLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeA: true,
      activeB: false,
      activeC: false,
      activeD: false,
      currPage: 1,
      currActive: "activeA"
    }
  }

  shouldComponentUpdate (prevProps, preState) {
    return (preState.currActive !== this.state.currActive);
  }


  pintarLink = name_ => {
    const resetStateVales = {};
    const name = name_;
    const keys = Object.keys(this.state);

    keys.forEach(key => (
      resetStateVales[key] = (name === key)
    ));

    this.setState(resetStateVales);
  }

  searchByOrder = (event, page) => {
    const LINKSORTAPIS = {
      activeA: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a4329352bd9a9fb8d7b99ab53da4528f&page=${page}&language=es`,
      activeB: `http://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=a4329352bd9a9fb8d7b99ab53da4528f&page=${page}&language=es`,
      activeC: `http://api.themoviedb.org/3/discover/movie?sort_by=vote_average.asec&api_key=a4329352bd9a9fb8d7b99ab53da4528f&page=${page}&language=es`,
      activeD: `https://block-master-api.herokuapp.com/users/${this.props.idUser}`
    }

    console.log("Buscando : " + event.target.name + " en page: " + page);
    this.props.sortMovies(event.target.name, LINKSORTAPIS[event.target.name]);
  }

  handleClick = event => {
    if (this.state.currActive === event.target.name) {
      this.searchByOrder(event, this.state.currPage + 1);
      this.setState((state) => ({...state, currPage: state.currPage + 1}));
      // console.log(this.state.);
    }else {
      this.pintarLink(event.target.name);
      this.searchByOrder(event, 1);
      this.setState({
        ...this.state,
        currPage: 1,
        currActive: event.target.name
      });
    }
  }

  render() {
    return (
      <Div>
        <A
          name='activeA'
          onClick={this.handleClick}
          active={this.state.activeA}>
          Todas
        </A>

        <A
          name='activeB'
          onClick={this.handleClick}
          active={this.state.activeB}>
          Más valoradas
        </A>

        <A
          name='activeC'
          onClick={this.handleClick}
          active={this.state.activeC}>
          Menos valoradas
        </A>

        <A
          name='activeD'
          onClick={this.handleClick}
          active={this.state.activeD}>
          Mis películas
        </A>

        <LinkStyle to={'/crud'}> Admin </LinkStyle>
      </Div>
    );
  }
}


export default NavbarLinks;