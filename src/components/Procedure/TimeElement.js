import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProcedureCardElement from "./CardElement";

const timeUnits = {
  'minute': 'minutos',
  'day': 'días',
  'month': 'meses',
  'year': 'años'
}

const singleTimeUnits = {
  'minute': 'minuto',
  'day': 'día',
  'month': 'mes',
  'year': 'año'
}

export default class ProcedureTimeElement extends Component {
  getTimeVal() {
    let key = this.props.unit;
    let amount = this.props.amount;
    return amount + ' ' + (amount === 1 ? singleTimeUnits[key] : timeUnits[key]);
  }

  render() {
    return <ProcedureCardElement header={this.props.description} body={this.getTimeVal()} />
  }
}

ProcedureTimeElement.propTypes = {
  unit: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};
