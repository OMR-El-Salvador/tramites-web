import React, { Component } from 'react';

const style = {
  fontWeight: '600',
  fontSize: '3em'
}
export default class Error extends Component {
  render() {
    return (
      <div>
        <img
          width='128px'
          height='128px'
          alt='icono de error'
          src={require('../../img/icons/error.svg')}
        />
        <p style={style}>
          Ha ocurrido un error, por favor reportarlo a
          &nbsp;<a href='mailto:rnt@omr.gob.sv'>rnt@omr.gob.sv</a>.
        </p>
      </div>
    )
  }
}
