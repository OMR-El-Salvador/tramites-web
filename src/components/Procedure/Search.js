import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

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
    if (this.state.value !== '') this.props.history.push('/procedures?term='+this.state.value);
  }

  render() {
    return (
      <div className='col-md-5 relative align-self-center'>
        <form onSubmit={this.handleSubmit} className='bg-white rounded pb_form_v1'>
          <h2 className='mb-4 mt-0 text-center'>Portal de trámites</h2>
          <div className='form-group'>
            <input
              value={this.state.value}
              onChange={this.handleChange}
              type='text'
              className='form-control pb_height-50 reverse'
              placeholder='Buscar…'
            />
          </div>
          <div className='form-group'>
            <input
              type="submit"
              disabled={!this.state.value}
              className="btn btn-primary btn-lg btn-block pb_btn-pill btn-shadow-blue"
              value="Ver resultados"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(ProcedureSearch)
