import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LegalBasisRegulation from './Regulation';

export default class LegalBasisElement extends Component {
  render() {
    return (
      <div className='legalBasisElement'>
        <td className='legalBasisTheme'>{this.props.theme}</td>
        <td className='legalBasisRegulations'>
          <ul>
            {this.props.regulations &&
              this.props.regulations.map(regulation => (
                <li key={regulation.id}>
                  <LegalBasisRegulation
                    name={regulation.name}
                    reference={regulation.reference}
                    url={regulation.url}
                  />
                </li>
              ))
            }
          </ul>
        </td>
      </div>
    )
  }
}

LegalBasisElement.propTypes = {
  theme: PropTypes.string.isRequired,
  regulations: PropTypes.array
};
