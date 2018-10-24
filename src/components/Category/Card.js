import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../UI/Card';

export default class CategoryCard extends Component {
  render() {
    return (
      <Card
        name={this.props.name}
        code={this.props.code}
        description={this.props.description}
        path={`/modes/category/${this.props.id}`}
      />
    )
  }
}

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
