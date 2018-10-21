import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProcedureCardElement from "./CardElement";
import URL from '../../components/UI/URL/URL';

const currencies = {
  'dollar': '$',
  'colon': '₡'
}

export default class ProcedureCost extends Component {
  render() {
    let detail;
    if (this.props.charge_link) detail = <URL href={this.props.link} text='Ver archivo'/>;
    else detail = currencies[this.props.currency] + this.props.amount.toFixed(2);

    return <ProcedureCardElement header={'Costo'} body={detail} />;
  }
}

ProcedureCost.propTypes = {
  currency: PropTypes.string,
  amount: PropTypes.number,
  link: PropTypes.string
};
