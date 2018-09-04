import React, { Component } from 'react';
import queryString from 'query-string';

import ProcedureList from '../../components/Procedure/List';

const mockProcedures = [
  {
    id: 1,
    name: 'Procedure A',
    modes: [
      { id: 1, text: 'For natural persons' },
      { id: 2, text: 'For companies' },
      { id: 3, text: 'For under age applicants' },
    ]
  },
  {
    id: 2,
    name: 'Procedure B',
    modes: [
      { id: 1, text: 'For natural persons' },
      { id: 2, text: 'For companies' },
      { id: 3, text: 'For under age applicants' },
    ]
  },
  {
    id: 3,
    name: 'Procedure C',
    modes: [
      { id: 1, text: 'For natural persons' },
      { id: 2, text: 'For companies' },
      { id: 3, text: 'For under age applicants' },
    ]
  }
];

export default class ProcedureListScreen extends Component {
  constructor(props) {
    super(props);
    let params = queryString.parse(this.props.location.search)
    this.state = { term: params.term };
  }

  render() {
    return (
      <section className='text-left' id='section-procedures'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-md-12'>
              <h3 className='heading mb-3'>
                {
                  mockProcedures.length > 1
                  ?
                  'Se encontraron los siguientes ' + mockProcedures.length + ' resultados '
                  :
                  'Se encontró el siguiente resultado '
                }
                para "{this.state.term}":
              </h3>
              <ProcedureList procedures={mockProcedures} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}