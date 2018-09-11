import React, { Component } from 'react';
import queryString from 'query-string';

import './List.css';

import ProcedureList from '../../components/Procedure/List';

const mockProcedures = [
  {
    id: 1,
    name: 'Procedure A',
    description: 'And gosh vicious trenchant less cat neutral due oh factious owl lemur'+
        'accordingly playfully flashy amongst the inanimately adversely like scorpion grudgingly'+
        'yikes amongst near much over tepid dear less the octopus wrung emptied.',
    modes: [
      { id: 1, text: 'For natural persons' },
      { id: 2, text: 'For companies' },
      { id: 3, text: 'For under age applicants' },
    ]
  },
  {
    id: 2,
    name: 'Procedure B',
    description: 'And gosh vicious trenchant less cat neutral due oh factious owl lemur'+
        'accordingly playfully flashy amongst the inanimately adversely like scorpion grudgingly'+
        'yikes amongst near much over tepid dear less the octopus wrung emptied.',
    modes: [
      { id: 1, text: 'For natural persons' },
      { id: 2, text: 'For companies' },
      { id: 3, text: 'For under age applicants' },
    ]
  },
  {
    id: 3,
    name: 'Procedure C',
    description: 'And gosh vicious trenchant less cat neutral due oh factious owl lemur'+
        'accordingly playfully flashy amongst the inanimately adversely like scorpion grudgingly'+
        'yikes amongst near much over tepid dear less the octopus wrung emptied.',
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
      <div>
        <section className='text-left' id='section-procedures'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h6 className='result-text'>
                  {
                    mockProcedures.length > 1
                    ?
                    'Se encontraron los siguientes ' + mockProcedures.length + ' resultados '
                    :
                    'Se encontró el siguiente resultado '
                  }
                  para "<em>{this.state.term}</em>":
                </h6>
                <hr />
                <ProcedureList procedures={mockProcedures} />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}