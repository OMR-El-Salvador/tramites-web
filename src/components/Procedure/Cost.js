import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

import { HttpService } from '../../services/http';
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
    if (this.state.status === 'empty' ||
        (this.state.status !== 'loading' && this.state.data.amount === 0))
      return <p style={{fontWeight: '400'}}>No posee.</p>
    else if (this.state.status === 'loading') return <Loading />
    else {
      return (
        <div style={{ marginTop: '0.5em', letterSpacing: '0.005em' }}>
          {this.state.data.amount &&
          (<NumberFormat
            value={this.state.data.amount}
            displayType={'text'}
            thousandSeparator={true}
            prefix={currencies[this.state.data.currency]}
            renderText={value => value + '. '}
          />)}
          {this.state.data.description && (this.state.data.description + '.')}
          <br />
          {this.state.data.main_url &&
          <a href={this.state.data.main_url} className='btn btn-success'>Información en línea</a>}
          {this.state.data.secondary_url &&
          <a
            style={{marginLeft: '0.3em'}}
            href={this.state.data.secondary_url}
            className='btn btn-info'>
            Información complementaria
          </a>}
          {/* TODO: Mount document server */}
          {/* {this.state.data.main_file &&
          <a href={this.state.data.main_file} className='btn btn-success'>Información en línea</a>}
          {this.state.data.secondary_file &&
          <a
            style={{marginLeft: '0.3em'}}
            href={this.state.data.secondary_file}
            className='btn btn-info'>
            Información complementaria
          </a>} */}
        </div>
      )
    }
  }
}

ProcedureCost.propTypes = { id: PropTypes.number };
