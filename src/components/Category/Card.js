import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default class CategoryElement extends Component {
  render() {
    return (
      <div key={this.props.id}>
        <Link to={`/modes/category/${this.props.id}`}>
          <div className='card'>
            <img
              className='card-img-top'
              width='128px'
              height='128px'
              src={require('../../img/icons/'+this.props.code+'.svg')} />
            <br />
            <div className='d-flex flex-column'>
              <p className='card-title'>{this.props.name}</p>
              <p className='card-text text-left'>{this.props.description}</p>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

CategoryElement.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
