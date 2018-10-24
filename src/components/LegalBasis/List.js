import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

// const legislationTypes = {
//   'regulation': 'Reglamento de Ley',
//   'law': 'Ley',
//   'constitution': 'Constitutición',
//   'other': 'Otro',
//   'non_existent': 'No existe',
//   'ministerial_agreement': 'Acuerdo ministerial',
//   'international_treaty': 'Tratado internacional',
//   'technical_regulation': 'Reglamento técnico',
//   'executive_order': 'Decreto ejecutivo'
// }

const modalStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement(document.getElementById('root'));

export default class LegalBasisList extends Component {
  constructor() {
    super();

    this.state = { modalIsOpen: false, selected: 0 };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(i) {
    if (this.props.legalBasis[i].legislation_name) this.setState({selected: i, modalIsOpen: true});
  }

  closeModal() { this.setState({modalIsOpen: false}); }

  changeTopic(newTopic) { this.prevTopic = newTopic; };

  render() {
    let prevTopic = null;

    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          style={modalStyles}
          contentLabel='Detalles de base legal'
        >
          <button onClick={this.closeModal} type='button' className='close' aria-label='Close'>
            <span aria-hidden='true'>&times;</span>
          </button>
          <div className='card mb-3'>
            <div
              className='card-header bg-info text-white'
              style={{fontWeight: '600', fontSize: '1.2em'}}>
              {this.props.legalBasis[this.state.selected].legal_topic.name}
            </div>
            <div className='card-body text-dark'>
              <p className='card-title' style={{fontWeight: '500'}}>
                {this.props.legalBasis[this.state.selected].legislation_name}.
              </p>
              <p className='card-text legal-basis-reference' style={{fontWeight: '400'}}>
                {this.props.legalBasis[this.state.selected].legislation_reference}.
              </p>
            </div>
          </div>
        </Modal>
        <table className='table table-hover'>
          <tbody>
            {
              this.props.legalBasis.map((lb, i) => (
                <tr key={lb.id} onClick={() => this.openModal(i)}>
                  <td style={{fontWeight: '500'}}>
                    {lb.legal_topic.name!==prevTopic && lb.legal_topic.name}
                  </td>
                  <td>{!lb.legislation_name?'No Existe':lb.legislation_name}</td>
                  {this.changeTopic(lb.legal_topic.name)}
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

LegalBasisList.propTypes = {
  legalBasis: PropTypes.array.isRequired
};