import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LegalBasisElement from './Element';

export default class LegalBasisList extends Component {
  render() {
    return (
      <table className='legalBasisList'>
        {
          this.props.legalBasis.map(legalBasis => (
            <tr key={legalBasis.id}>
              <LegalBasisElement theme={legalBasis.theme} regulations={legalBasis.regulations}/>
            </tr>
          ))
        }
      </table>
    )
  }
}

LegalBasisList.propTypes = {
  legalBasis: PropTypes.array.isRequired
};