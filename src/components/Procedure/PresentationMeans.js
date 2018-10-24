import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProcedureCardElement from "./CardElement";

const presentationMeans = {
  'face': 'Presencial',
  'online': 'En línea',
  'face_online': 'Presencial y En Línea'
}

export default class ProcedurePresentationMeans extends Component {
  render() {
    return (
      <ProcedureCardElement
        header={'Presentación'}
        body={presentationMeans[this.props.means]} />
    )
  }
}

ProcedurePresentationMeans.propTypes = {
  means: PropTypes.string.isRequired
};
