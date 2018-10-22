import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    return (
      <Link to={this.props.path}>
        <div className='card h-100 flex-fill'>
          <img
            className='card-img-top'
            width='128px'
            height='128px'
            alt={'icono de ' + this.props.name}
            src={require('../../img/icons/'+this.props.code+'.svg')} />
          <br />
          <div className='d-flex flex-column'>
            <p className='card-title'>{this.props.name}</p>
            {this.props.description &&
            <p className='card-text text-left'>{this.props.description}</p>}
          </div>
        </div>
      </Link>
    )
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  description: PropTypes.string,
  path: PropTypes.string.isRequired
};
