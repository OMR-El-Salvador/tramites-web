import React from 'react';
import { shallow } from 'enzyme';
import ProcedureList from './List';
import ProcedureElement from './Element';

let mockProcedures, wrapper;

beforeEach(() => {
  mockProcedures = [
    {id: 1, name: 'Procedure A', detail: 'A detailed detail for Procedure '},
    {id: 2, name: 'Procedure B', detail: 'A detailed detail for Procedure '},
    {id: 3, name: 'Procedure C', detail: 'A detailed detail for Procedure '},
  ];
  wrapper = shallow(<ProcedureList procedures={mockProcedures}/>);
});

it('should render a ProcedureElement item for every procedure in `props.procedures`', () => {
  expect(wrapper.find(ProcedureElement).length).toEqual(mockProcedures.length);
});
