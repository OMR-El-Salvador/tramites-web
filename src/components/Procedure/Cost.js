import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { HttpService } from '../../services/http';
import ProcedureCardElement from "./CardElement";
import URL from '../../components/UI/URL/URL';
import Loading from '../UI/Loading';

const currencies = { 'dollar': '$', 'colon': '₡' }

export default class ProcedureCost extends Component {
  constructor(props) { super(props); this.state = { data: null, status: 'loading' }; }

  componentDidMount() {
    HttpService.getResource('costs', '?mode_id=eq.' + this.props.id).then(data => {
      if (data.length > 0) this.setState({status: 'success', data: data[0]});
      else this.setState({status: 'empty'})
    });
  }

  render() {
    if (this.state.status === 'empty') return <p style={{fontWeight: '500'}}>No posee costos.</p>
    else if (this.state.status === 'loading') return <Loading />
    else {
      return (
        <div>
          {this.state.data.amount &&
          <ProcedureCardElement
            header={'Monto'}
            body={currencies[this.state.data.currency] + this.state.data.amount}
          />}
          {this.state.data.description &&
          <ProcedureCardElement header={'Descripción'} body={this.state.data.description} />}
          {this.state.data.main_url &&
          <ProcedureCardElement
            header={'Información'}
            body={<URL href={this.state.data.main_url} text='Ver en línea' />}
          />}
          {this.state.data.secondary_url &&
          <ProcedureCardElement
            header={'Información complementaria'}
            body={<URL href={this.state.data.main_url} text='Ver en línea' />}
          />}
          {this.state.data.main_file &&
          <ProcedureCardElement
            header={'Información'}
            body={<URL href={this.state.data.main_file} text='Ver en línea' />}
          />}
          {this.state.data.secondary_file &&
          <ProcedureCardElement
            header={'Información complementaria'}
            body={<URL href={this.state.data.main_file} text='Ver en línea' />}
          />}
        </div>
      )
    }
  }
}

ProcedureCost.propTypes = { id: PropTypes.number };
