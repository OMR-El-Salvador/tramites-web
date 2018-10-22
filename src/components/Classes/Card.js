import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../UI/Card';

export default class ClassCard extends Component {
  render() {
    return (
      <Card name={this.props.name} code={this.props.code} path={`/modes/category/${this.props.id}`} />
    )
  }
}

ClassCard.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
