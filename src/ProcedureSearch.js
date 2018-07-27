import React, { Component } from 'react'

export default class ProcedureSearch extends Component {
  render() {
    return (
      <form className="searchForm">
        <div className="form-group">
          <label for="searchTerm">Término de búsqueda</label>
          <input type="text" className="form-control" aria-describedby="searchHelp"
            placeholder="Ingresar término" />
              <small id="searchHelp" className="form-text text-muted">
                Se utilizará para filtrar los trámites.
              </small>
        </div>
        <button type="submit" className="btn btn-primary">Buscar</button>
      </form>
    )
  }
}
