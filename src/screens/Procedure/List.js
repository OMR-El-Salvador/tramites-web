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
      <section className="text-left" id="section-procedures">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <h3 className="heading mb-3">Se encontraron los siguiente 4 resultados para "dui":</h3>
              <ProcedureList procedures={mockProcedures} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}