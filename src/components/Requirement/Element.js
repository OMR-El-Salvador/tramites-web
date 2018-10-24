import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RequirementName from './Name';
// import RequirementDescription from './Description';
// import URL from '../UI/URL/URL';

export default class RequirementElement extends Component {
  render() {
    return (
      // <div className='requirementElement'>
      <RequirementName text={this.props.name} />
      //   <RequirementDescription text={this.props.description} />
      //   <URL href={this.props.url.href} text={this.props.url.text} />
      // </div>
    )
  }
}

RequirementElement.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};
