import React from 'react';
import { shallow } from 'enzyme/build';
import ProcedureList from './List';
import ProcedureElement from './Element';

let mockProcedures, wrapper;

beforeEach(() => {
  mockProcedures = [
    {id: 1, name: 'Procedure A', mode: 'A mode for Procedure A'},
    {id: 2, name: 'Procedure B', mode: 'A mode for Procedure B'},
    {id: 3, name: 'Procedure C', mode: 'A mode for Procedure C'},
  ];
  wrapper = shallow(<ProcedureList procedures={mockProcedures}/>);
});

it('should render a ProcedureElement item for every procedure in `props.procedures`', () => {
  expect(wrapper.find(ProcedureElement).length).toEqual(mockProcedures.length);
});
