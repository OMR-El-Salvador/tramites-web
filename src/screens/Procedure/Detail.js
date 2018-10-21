import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { HttpService } from '../../services/http';

import DefaultLogo from '../../img/default.png';

import URL from '../../components/UI/URL/URL';
import ProcedureName from '../../components/Procedure/Name';
import ProcedurePresentationMeans from '../../components/Procedure/PresentationMeans';
import ProcedureCost from '../../components/Procedure/Cost';
import ProcedurePaymentPlaces from '../../components/Procedure/PaymentPlaces';
import ProcedureTimeElement from '../../components/Procedure/TimeElement';
import ProcedureCardElement from '../../components/Procedure/CardElement';
import ProcedureDescriptionElement from '../../components/Procedure/DescriptionElement';
import RequirementList from '../../components/Requirement/List';
import LegalBasisList from '../../components/LegalBasis/List';

const cardElementStyle = {
  color: 'black',
  marginTop: '0.5em'
}

const modeTextStyle = {
  color: '#386CA4',
  fontWeight: '500',
  fontSize: '1.3em',
  marginTop: '0.5em'
}

export default class ProcedureDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      data: { procedure: { name: '', institution: { } }, class: { name: ''}, legal_base: [ ] }
    };
  }

  componentDidMount() {
    let resPath = 'modes';
    // let addressesPath =
    //   'addresses(detail,schedule,phone,responsible_name,responsible_position,'+
    //   'municipality(name, department(name)))';
    let legalBasePath =
      'legal_base(id,type,legislation_name,legislation_reference,legal_topic(name))';
    let procedurePath = 'procedure(name,institution(name,url))';
    let formsPath = 'forms(name,url)';
    let classPath = 'class(name)';
    let categoriesPath = 'categories(id,name)';

    let params =
      '?select=*,' + legalBasePath + ',' + classPath + ',' + procedurePath + ',' + formsPath + ',' +
      categoriesPath + '&id=eq.' + this.state.id;
    // HttpService.getResource(resPath, params).then(data => console.log(data));
    HttpService.getResource(resPath, params).then(data => this.setState({data: data[0]}));
  }

  render() {
    let requirements = <RequirementList />
    let legalBasis = <LegalBasisList legalBasis={this.state.data.legal_base} />

    return (
      <div>
        <section
            className='text-left procedure-detail justify-content-center align-items-center'
            id='section-procedures'
            style={{marginTop: '1.3em'}}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8'>
                <div className='row'>
                  <div className='col-md-12' style={{fontWeight: '600'}}>
                    <ProcedureName text={this.state.data.procedure.name} />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12' style={modeTextStyle}>
                    {this.state.data.name}
                  </div>
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
                                header='¿Cuáles son los requisitos?'
                                body={requirements}
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
                      <div className='tab-pane fade' id='forms' role='tabpanel' aria-labelledby='forms-tab'>...</div>
                      <div className='tab-pane fade' id='addresses' role='tabpanel' aria-labelledby='addresses-tab'>...</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='row'>
                  <div className='card'>
                    <div className='card-body'>
                      <img className='card-img-top' src={DefaultLogo} alt='Logo institucional'/>
                      {this.state.data.procedure.institution.name &&
                        <h5 style={cardElementStyle} className='card-title'>
                          {this.state.data.procedure.institution.name}
                        </h5>
                      }
                      {this.state.data.procedure.institution.url &&
                        <div>
                          <URL
                              style={cardElementStyle}
                              href={this.state.data.procedure.institution.url}
                              text='Ver sitio web' />
                          <i className='pull-right fas fa-external-link-alt action-icon'></i>
                        </div>
                      }
                      <h6 style={cardElementStyle} className='card-subtitle mb-2 text-muted'>
                        {this.state.data.code}
                      </h6>
                      <br />
                      {this.state.data.presentation_means && (
                        <ProcedurePresentationMeans means={this.state.data.presentation_means}/>
                      )}
                      {(this.state.data.charge_amount || this.state.data.charge_link) && (
                        <div>
                          <ProcedureCost
                            currency={this.state.data.currency}
                            amount={this.state.data.charge_amount}
                            link={this.state.data.charge_link} />
                          <ProcedurePaymentPlaces places={this.state.data.payment_places} />
                        </div>
                      )}
                      {this.state.data.response_time_unit && (
                        <ProcedureTimeElement
                          unit={this.state.data.response_time_unit}
                          amount={this.state.data.response_time_amount}
                          description='Tiempo de respuesta'
                        />
                      )}
                      {this.state.data.legal_time_unit && (
                        <ProcedureTimeElement
                          unit={this.state.data.legal_time_unit}
                          amount={this.state.data.legal_time_amount}
                          description='Tiempo regulado'
                        />
                      )}
                      {this.state.data.validity_time_unit && (
                        <ProcedureTimeElement
                          unit={this.state.data.validity_time_unit}
                          amount={this.state.data.validity_time_amount}
                          description='Vigencia'
                        />
                      )}
                      {this.state.data.class && (
                        <ProcedureCardElement
                          header='Clase'
                          body={this.state.data.class.name} />
                      )}
                      <ProcedureCardElement
                        header='Unidad'
                        body = {
                          this.state.data.responsible_area + '. ' +
                          this.state.data.responsible_area
                        }
                      />
                      {this.state.data.categories && this.state.data.categories.map(cat =>
                        <Link key={cat.id} to={`/modes/category/${cat.id}`}>
                          <span className='badge badge-success'>
                            {cat.name}
                          </span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}