import React from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import Prewiew from '../components/Prewiew'
import '../index.css';

/* Estilos */
const Card = styled.div`
  cursor: pointer;
  width: 22rem;
  height: 33rem;
  background-image: url(${props => props.bgImg});
  background-size: contain;
  background-repeat: repeat-y;
  padding-top: 2rem;
  margin: 2rem 2rem 0;
`;

const Score = styled.p`
  width: 50%;
  padding: .5rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  border-width: .2rem;
  border-style: solid;
  border-color: ${props => props.score >= 5 ? '#FED941' : '#0E3FA9'};
  color: #FFFFFF;
`;

const Start = styled.i`
  color: #FED941;
  margin-right: .8rem;
`;

const ModalS = styled(Modal)`
  background-color: #000000;
  width: 100%;
  max-width: none;
`;

const ModalDialogStyle = styled(Modal.Dialog)`
  max-width: none!important;
  width: 100%;
`;


/* Componentes */
class MoviesSectionCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      show: false
    }
  }

  handleShow = () => {
    this.setState({show: true})
  };

  handleClose = () => {
    this.setState({show: false})
  };

  render() {
    return (
      <div>
        <Card bgImg={this.props.bgImg} onClick={this.handleShow}>
          <Score score={this.props.score}>
            <Start className='fas fa-star'></Start>
            {this.props.score}
          </Score>
        </Card>

        <ModalS show={this.state.show} onHide={this.handleClose} dialogClassName='custom-dialog' >
          <ModalDialogStyle >
            <Modal.Header closeButton> <p> Preview </p> </Modal.Header>
            <Prewiew overview={this.props.overview} title={this.props.title} />
          </ModalDialogStyle>
        </ModalS>
      </div>
    );
  }
}

export default MoviesSectionCard;