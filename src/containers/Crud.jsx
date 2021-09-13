import React from 'react';
import CrudCard from '../components/CrudCard';
import styled from 'styled-components';
import CrudAddCard from '../components/CrudAddCard';
import uploadFile from '../helpers/uploadFiles';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';


/* Estilos */
const ContainCards = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 100vw;
  width: fit-content;
  background-color: #EEEEEF;
  padding: 2rem 1rem;
`;

const LinkStyle = styled(Link)`
  cursor: pointer;
  font-size: 2rem;
  color: dodgerblue;
  transition: color .1s ease-in-out;
  margin-bottom: 2rem;
  
  &:hover{
    color: gray;
    text-decoration: underline;
  }
`;


const Div = styled.div`
  display: flex;
`;

/* Componentes */
class Crud extends React.Component {
  constructor (props) {
    super(props);
    this.state = { movies: []  };
    this.updateStateData();
  }

  Rerender = () => {
    this.forceUpdate();
  }

  updateStateData = () => {
    this.getData().then(data => {
      console.log(data);
      this.setState({ movies: data.movies });
    });
  }

  postData = async newDataMovie => {
    const imgUrl = await uploadFile(newDataMovie.img);
    this.getData().then(data => {
      const newData = data;
      newData.movies.push({
        title: newDataMovie.title,
        votes: newDataMovie.votes,
        img: imgUrl,
        description: newDataMovie.description,
        id: nanoid()
      });

      axios.put(`https://block-master-api.herokuapp.com/users/${this.props.idUser}`, newData)
        .then(response => {
          console.log("DATOS CARGADOS CORRECTAMENTE: " + response)
          this.updateStateData();
        })
        .catch(error => {console.log("Error: " + error)});

      });
  }

  getData = async () => {
    const response = await axios.get(`https://block-master-api.herokuapp.com/users/${this.props.idUser}`);
    return response.data;
  }

  deleteData = async (idMovie) => {
    this.getData().then(data => {
      const newData = data;
      newData.movies = newData.movies.filter(movie => movie.id !== idMovie);

      axios.put(`https://block-master-api.herokuapp.com/users/${this.props.idUser}`, newData)
        .then(response => {
          console.log("DATOS CARGADOS CORRECTAMENTE: " + response);
          this.updateStateData();
        })
        .catch(error => {console.log("Error: " + error)});
    });
  }

  editData = async (idMovie, newMovieData) => {
    const imgUrl = await uploadFile(newMovieData.img);
    this.getData().then(data => {
      const newData = data;
      let idxMovie = -1;

      for(let idx=0; idx<newData.movies.length; ++idx){
        if(newData.movies[idx].id === idMovie){
          idxMovie = idx;
          break;
        }
      }

      newData.movies[idxMovie] = {...newMovieData, img: imgUrl, id: idMovie};

      axios.put(`https://block-master-api.herokuapp.com/users/${this.props.idUser}`, newData)
        .then(response => {
          console.log("DATOS CARGADOS CORRECTAMENTE: " + response);
          this.updateStateData();
        })
        .catch(error => {console.log("Error: " + error)});
    });
  }

  render () {
    return (
      <ContainCards>
        <LinkStyle to={'/app'}> Volver </LinkStyle> 
        <Div>
          {
            this.state.movies.map(movie => (
              <CrudCard
                key={movie.id}
                {...movie}
                deleteData={this.deleteData}
                editData={this.editData}  
              />
            ))
          }
          <CrudAddCard postData={this.postData} />
        </Div>
      </ContainCards>
    )
  }
}

export default Crud;