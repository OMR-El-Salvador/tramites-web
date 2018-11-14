import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';

export default class CategoriesTags extends Component {
  render() {
    return (
      this.props.categories ? this.props.categories.map(cat =>
        <Link
          style={{marginLeft:'auto', marginRight:'0'}}
          key={cat.id}
          to={`/modalidades/categoria/${cat.id}`}>
          <span style={{fontWeight: '500'}} className='badge badge-success'>{cat.name}</span>&nbsp;
        </Link>
      ) : null
    )
  }
}

CategoriesTags.propTypes = {
  categories: PropTypes.array
};