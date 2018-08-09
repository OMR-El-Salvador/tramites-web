import React, { Component } from 'react';
import PropTypes from 'prop-types';
import URL from '../UI/URL/URL';

export default class LegalBasisRegulation extends Component {
  render() {
    return (
      <div className='legalBasisRegulation'>
        <div className='regulationName'>{this.props.name}</div>,
        <div className='regulationReference'>{this.props.reference}</div>
        {this.props.url &&
          <URL href={this.props.url.href} text={this.props.url.text} />
        }
      </div>
    )
  }
}

LegalBasisRegulation.propTypes = {
  name: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  url: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};