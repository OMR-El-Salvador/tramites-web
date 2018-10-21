import React, { Component } from 'react';
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

export default class LegalBasisList extends Component {
  changeTopic(newTopic) { this.prevTopic = newTopic; };

  render() {
    let prevTopic = null;

    return (
      <table className='table table-hover'>
        <tbody>
          {
            this.props.legalBasis.map(lb => (
              <tr key={lb.id}>
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
    )
  }
}

LegalBasisList.propTypes = {
  legalBasis: PropTypes.array.isRequired
};