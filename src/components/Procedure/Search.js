import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProcedureSearch extends Component {
  render() {
    return (
      <div className="col-md-5 relative align-self-center">
        <form action="#" className="bg-white rounded pb_form_v1">
          <h2 className="mb-4 mt-0 text-center">Registro Nacional de Trámites</h2>
          <div className="form-group">
            <input type="text" className="form-control pb_height-50 reverse" placeholder="Buscar…" />
          </div>
          <div className="form-group">
            <Link to="/procedures" type="submit" className="btn btn-primary btn-lg btn-block pb_btn-pill btn-shadow-blue">Ir a Resultados</Link>
          </div>
        </form>
      </div>
    )
  }
}
