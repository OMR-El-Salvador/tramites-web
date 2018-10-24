import React from 'react';
import { shallow } from 'enzyme/build';
import ProcedureList from './List';
import ProcedureElement from './Element';

let mockProcedures, wrapper;

beforeEach(() => {
  mockProcedures = [
    {
      id: 1,
      name: 'Procedure A',
      code: 'PROC-001',
      modes: [
        { id: 1, name: 'For natural persons', description: 'Procedure for natural persons' },
        { id: 2, name: 'For companies', description: 'Procedure for companies' },
        { id: 3, name: 'For under age applicants', description: 'Procedure for under age app.' },
      ]
    },
    {
      id: 2,
      name: 'Procedure B',
      code: 'PROC-001',
      modes: [
        { id: 1, name: 'For natural persons', description: 'Procedure for natural persons' },
        { id: 2, name: 'For companies', description: 'Procedure for companies' },
        { id: 3, name: 'For under age applicants', description: 'Procedure for under age app.' },
      ]
    },
    {
      id: 3,
      name: 'Procedure C',
      code: 'PROC-001',
      modes: [
        { id: 1, name: 'For natural persons', description: 'Procedure for natural persons' },
        { id: 2, name: 'For companies', description: 'Procedure for companies' },
        { id: 3, name: 'For under age applicants', description: 'Procedure for under age app.' },
      ]
    }
  ];
  wrapper = shallow(<ProcedureList procedures={mockProcedures}/>);
});

it('should render a ProcedureElement item for every procedure in `props.procedures`', () => {
  expect(wrapper.find(ProcedureElement).length).toEqual(mockProcedures.length);
});
