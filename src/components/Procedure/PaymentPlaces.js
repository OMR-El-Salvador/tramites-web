import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProcedureCardElement from "./CardElement";

const places = {
  'central_offices': 'Oficinas centrales',
  'regional_offices': 'Oficinas regionales',
  'financial_institution': 'Instituciones financieras',
  'online': 'En línea',
  'treasury': 'Ministerio de Hacienda',
  'other': 'Otros'
}

export default class ProcedurePaymentPlaces extends Component {
  getPlaces() {
    return this.props.places.reduce((acc,curr,i) => acc+(i===0?'':', ')+places[curr],'');
  }

  render() { return <ProcedureCardElement header={'Lugares de pago'} body={this.getPlaces()} />; }
}

ProcedurePaymentPlaces.propTypes = { places: PropTypes.array.isRequired };
