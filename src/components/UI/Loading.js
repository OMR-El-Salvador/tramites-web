import React, { Component } from 'react';

const style = {
  fontWeight: '600',
  fontSize: '3em'
}
export default class Loading extends Component {
  render() {
    return (
      <div>
        <img
          width='128px'
          height='128px'
          alt='icono de carga'
          src={require('../../img/icons/loading.svg')}
        />
        <p style={style}>Cargando...</p>
      </div>
    )
  }
}
