import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { HttpService } from '../../services/http';
import ProcedureCardElement from "./CardElement";
import URL from '../../components/UI/URL/URL';

const currencies = { 'dollar': '$', 'colon': '₡' }

export default class ProcedureCost extends Component {
  constructor(props) { super(props); this.state = { data: null, status: 'load' }; }

  componentDidMount() {
    HttpService.getResource('costs', '?mode_id=eq.' + this.props.id).then(data => {
      if (data.length > 0) this.setState({status: 'success', data: data[0]});
      else this.setState({status: 'empty'})
    });
  }

  render() {
    let detail;
    if (this.props.link)
      detail = <URL href={this.props.link} text='Ver archivo'/>;
    else if (this.props.amount)
      detail = currencies[this.props.currency] + this.props.amount.toFixed(2);
    else
      detail= 'No tiene'

    return <ProcedureCardElement header={'Costo'} body={detail} />;
  }
}

ProcedureCost.propTypes = { id: PropTypes.number };
