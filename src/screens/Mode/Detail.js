import React, { Component } from 'react';
import { HttpService } from '../../services/http';

import DefaultLogo from '../../img/icons/goes.svg';

import URL from '../../components/UI/URL/URL';
import Loading from '../../components/UI/Loading';
import Error from '../../components/UI/Error';
import AddressesList from '../../components/UI/Address/List';

import ProcedureName from '../../components/Procedure/Name';
import ProcedureCost from '../../components/Procedure/Cost';
import ProcedurePaymentPlaces from '../../components/Procedure/PaymentPlaces';
import ProcedureTimeElement from '../../components/Procedure/TimeElement';
import ProcedureCardElement from '../../components/Procedure/CardElement';
import ProcedureDescriptionElement from '../../components/Procedure/DescriptionElement';
import RequirementList from '../../components/Requirement/List';
import LegalBasisList from '../../components/LegalBasis/List';
import FormList from '../../components/Form/List';
import CategoriesTags from '../../components/Category/Tags';

const cardElementStyle = { color: 'black', marginTop: '0.5em' }

const modeTextStyle = {
  color: '#386CA4',
  fontWeight: '500',
  fontSize: '1.3em',
  marginTop: '0.5em'
}

export default class ModeDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      status: 'loading',
      data: { procedure: { name: '', institution: { } }, class: { name: ''}, legal_base: [ ] }
    };
  }

  componentDidMount() {
    let resPath = 'modes';
    let legalBasePath =
      'legal_base(id,type,legislation_name,legislation_reference,legal_topic(name))';
    let procedurePath = 'procedure(name,institution(name,url))';
    let formsPath = 'forms(id,name,url)';
    let classPath = 'class(name)';
    let categoriesPath = 'categories(id,name)';

    let params =
      '?select=*,' + legalBasePath + ',' + classPath + ',' + procedurePath + ',' + formsPath + ',' +
      categoriesPath + '&id=eq.' + this.state.id;
    // HttpService.getResource(resPath, params).then(data => console.log(data));
    HttpService.getResource(resPath, params).then(data => {
      if (data.length > 0) this.setState({status: 'success', data: data[0]});
      else this.setState({status: 'error'});
    });
  }

  render() {
    let legalBasis = <LegalBasisList legalBasis={this.state.data.legal_base} />

    return (
      <div>
        <section
            className='text-left procedure-detail justify-content-center align-items-center'
            id='section-procedures'
            style={{marginTop: '1.3em'}}>
          <div className='container'>
            {this.state.status === 'success' && (
              <div className='row'>
                <div className='col-md-8'>
                  <div className='row'>
                    <div className='col-md-12' style={{fontWeight: '600'}}>
                      <ProcedureName text={this.state.data.procedure.name} />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-12' style={modeTextStyle}>{this.state.data.name}</div>
                  </div>
                  <div className='row'>
                    <div className='col-md-12'>
                      <ul
                        className='nav nav-pills nav-fill'
                        role='tablist'
                        style={{marginTop: '2em', marginBottom: '1em'}}>
                        <li className='nav-item'>
                          <a
                            className='nav-link active'
                            id='details-tab'
                            data-toggle='tab'
                            href='#details'
                            role='tab'
                            aria-controls='información'
                            aria-selected='true'>
                            Información
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a
                            className='nav-link'
                            id='requirements-tab'
                            data-toggle='tab'
                            href='#requirements'
                            role='tab'
                            aria-controls='requisitos'
                            aria-selected='true'>
                            Requisitos
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a
                            className='nav-link'
                            id='forms-tab'
                            data-toggle='tab'
                            href='#forms'
                            role='tab'
                            aria-controls='formularios'
                            aria-selected='false'>
                            Formularios
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a
                            className='nav-link'
                            id='addresses-tab'
                            data-toggle='tab'
                            href='#addresses'
                            role='tab'
                            aria-controls='direcciones'
                            aria-selected='false'>
                            Direcciones
                          </a>
                        </li>
                      </ul>
                      <div className='tab-content'>
                        <div
                          className='tab-pane fade show active'
                          id='details'
                          role='tabpanel'
                          aria-labelledby='details-tab'>
                          <div className='row'>
                            <div className='col-md-12'>
                              <ProcedureDescriptionElement
                                header='¿En qué consiste?'
                                body={this.state.data.description + '.'}
                              />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-md-12'>
                              <ProcedureDescriptionElement
                                header='¿Quiénes están obligados?'
                                body={this.state.data.subject + '.'}
                              />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-md-12'>
                              <ProcedureDescriptionElement
                                header='¿Cuáles son los costos?'
                                body={<ProcedureCost id={this.state.data.id} />}
                              />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-md-12'>
                              <ProcedureDescriptionElement
                                header='¿Cuál es su base legal?'
                                body={legalBasis}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className='tab-pane fade'
                          id='requirements'
                          role='tabpanel'
                          aria-labelledby='requirements-tab'>
                          {this.state.data.id && <RequirementList id={this.state.data.id} />}
                        </div>
                        <div
                          className='tab-pane fade'
                          id='forms'
                          role='tabpanel'
                          aria-labelledby='forms-tab'>
                          <FormList forms={this.state.data.forms} />
                        </div>
                        <div
                          className='tab-pane fade'
                          id='addresses'
                          role='tabpanel'
                          aria-labelledby='addresses-tab'>
                          {this.state.data.id && <AddressesList id={this.state.data.id} />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='card'>
                      <div className='card-body'>
                        <div className='ribbon ribbon-purple ribbon-top-right'>
                          <span><i className='fas fa-archway'></i></span>
                        </div>
                        <img className='card-img-top' src={DefaultLogo} alt='Logo institucional'/>
                        {this.state.data.procedure.institution.name &&
                        <h5 style={cardElementStyle} className='card-title'>
                          {this.state.data.procedure.institution.name}
                        </h5>}
                        {this.state.data.presentation_url &&
                        <div>
                          <URL
                            style={cardElementStyle}
                            href={this.state.data.presentation_url}
                            text='Realizar en línea '
                          />
                          <i className='pull-right fas fa-external-link-alt action-icon'></i>
                        </div>}
                        <h6 style={cardElementStyle} className='card-subtitle mb-2 text-muted'>
                          {this.state.data.code}
                        </h6>
                        <br />
                        {(this.state.data.charge_amount || this.state.data.charge_link) &&
                        <ProcedurePaymentPlaces places={this.state.data.payment_places} />}
                        {this.state.data.response_time_unit &&
                        <ProcedureTimeElement
                          unit={this.state.data.response_time_unit}
                          amount={this.state.data.response_time_amount}
                          description='Tiempo de respuesta'
                        />}
                        {this.state.data.legal_time_unit &&
                        <ProcedureTimeElement
                          unit={this.state.data.legal_time_unit}
                          amount={this.state.data.legal_time_amount}
                          description='Tiempo regulado'
                        />}
                        {this.state.data.validity_time_unit &&
                        <ProcedureTimeElement
                          unit={this.state.data.validity_time_unit}
                          amount={this.state.data.validity_time_amount}
                          description='Vigencia'
                        />}
                        {this.state.data.class &&
                        <ProcedureCardElement
                          header='Clase'
                          body={this.state.data.class.name}
                        />}
                        <ProcedureCardElement
                          header='Unidad'
                          body = {
                            this.state.data.responsible_area + '. ' +
                            this.state.data.responsible_area
                          }
                        />
                        <CategoriesTags categories={this.state.data.categories} />
                        <hr />
                        <em>Actualizado el {this.state.data.updated.split('T')[0]}.</em><br /><br />
                        <strong style={{color: 'black'}}>
                          <span><i className='fas fa-archway'></i></span>&nbsp;
                          Con base en información brindada por la institución al OMR.
                        </strong>
                        {/* Recuperado de transparencia.gob.sv */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )} {this.state.status === 'loading' &&
              <div className='col-md-12 text-center'><Loading /></div>
            } {this.state.status === 'error' &&
              <div className='col-md-12 text-center'><Error /></div>
            }
          </div>
        </section>
      </div>
    )
  }
}