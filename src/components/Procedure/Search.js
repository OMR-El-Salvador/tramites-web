import React, { Component } from 'react'

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
            <input type="submit" className="btn btn-primary btn-lg btn-block pb_btn-pill btn-shadow-blue" value="Ir a Resultados" />
          </div>
        </form>
      </div>
    )
  }
}
