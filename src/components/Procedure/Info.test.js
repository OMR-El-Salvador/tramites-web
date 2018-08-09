import React from 'react';
import { shallow } from 'enzyme';

import LegalBasisList from "../LegalBasis/List";
import OfficeInfo from '../Office/Info';
import ProcedureInfo from './Info';
import ProcedureName from './Name';
import ProcedureDetail from './Detail';

let name, detail, url, offices, legalBasis, wrapper;

beforeEach(() => {
  name = 'Procedure A',
  detail = 'A detail for Procedure A',
  url = 'https://procedure.a.com',
  offices = [
    { id: 1, address: 'The Wolf\'s Den', municipality: 'White harbor', department: 'The North' },
    { id: 2, address: 'At the Weirwood', municipality: 'Winterfell', department: 'The North' },
  ]
  legalBasis = [
    { id: 1, name: 'A legal law', reference: '3rd page, character 45' },
    { id: 2, name: 'The law of fake', reference: 'Article 53' },
    { id: 3, name: 'Just a Bylaw', reference: '5th paragraph' }
  ]
  wrapper = shallow(
    <ProcedureInfo name={name} url={url} detail={detail} offices={offices} legalBasis={legalBasis}/>
  )
});

it('should contain a ProcedureName component', () => {
  expect(wrapper.find(ProcedureName).length).toEqual(1);
});

it('should contain a ProcedureDetail component', () => {
  expect(wrapper.find(ProcedureDetail).length).toEqual(1);
});

it('should render a OfficeInfo item for every office', () => {
  expect(wrapper.find(OfficeInfo).length).toEqual(offices.length);
});

it('should contain a LegalBasisList component', () => {
  expect(wrapper.find(LegalBasisList).length).toEqual(1);
});
