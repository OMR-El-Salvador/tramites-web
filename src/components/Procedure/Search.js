import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ProcedureSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { this.setState({ value: event.target.value }); }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value !== '') this.props.history.push('/tramites?term='+this.state.value);
  }

  render() {
    return (
      <div className='col-md-5 relative align-self-center'>
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='col-md-8'>
              <div className='form-group'>
                <input
                  value={this.state.value}
                  onChange={this.handleChange}
                  type='text'
                  className='form-control-lg col-lg-12 search-box'
                />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <input
                  type='submit'
                  disabled={!this.state.value}
                  style={{ color: 'white' }}
                  className='btn btn-lg btn-block btn-success'
                  value='Buscar…'
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(ProcedureSearch)
