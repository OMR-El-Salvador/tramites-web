import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../UI/Card';

export default class InstitutionCard extends Component {
  render() {
    return (
      <Card
        name={this.props.name}
        code='goes'
        path={`/tramites/institucion/${this.props.id}`}
      />
    )
  }
}

InstitutionCard.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
