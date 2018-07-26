import React, { Component } from 'react'

export default class ProcedureSearch extends Component {
  render() {
    return (
      <div>
        <form>
            <div class="form-group">
                <label for="searchTerm">Termino de búsqueda</label>
                <input type="text" class="form-control" aria-describedby="searchHelp" placeholder="Ingresar termino" />
                    <small id="searchHelp" class="form-text text-muted">Se utilizará para filtrar los trámites.</small>
            </div>
            <button type="submit" class="btn btn-primary">Buscar</button>
        </form>
      </div>
    )
  }
}
