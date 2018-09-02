import React, { Component } from 'react';
import ProcedureList from '../../components/Procedure/List';

const mockProcedures = [
  { id: 1, name: 'Procedure A', mode: 'A mode for Procedure A' },
  { id: 2, name: 'Procedure B', mode: 'A mode for Procedure B' },
  { id: 3, name: 'Procedure C', mode: 'A mode for Procedure C' },
];

export default class ProcedureListScreen extends Component {
  render() {
    return (
      <section className="text-left" id="section-home">
        <div className="container">
          <ProcedureList procedures={mockProcedures} />
          {/* <div className="row procedure-result">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <h5>Depósito de Fondos Ajenos en Custodia</h5>
            </div>
            <div className="col-md-1"></div>
          </div> */}
        </div>
      </section>
    )
  }
}