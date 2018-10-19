import React, { Component } from 'react';

import ProcedureName from '../../components/Procedure/Name';
import URL from '../../components/UI/URL/URL';

import '../../services/http';
import { HttpService } from '../../services/http';

const sectionStyle = {
  marginTop: '1.3em'
}

const headerStyle = {
  fontWeight: '600'
}

const generalElementStyle = {
  marginTop: '0.5em'
}

const cardElementStyle = {
  color: 'black',
  marginTop: '0.5em'
}

const modeTextStyle = {
  color: '#386CA4',
  fontWeight: '400',
  fontSize: '1.3em',
  marginTop: '0.5em'
}

const itemHeaderStyle = {
  fontWeight: '500'
}

const presentationMeans = {
  'face': 'Presencial',
  'online': 'En línea',
  'face_online': 'Presencial y En Línea'
}

const timeUnits = {
  'minute': 'minutos',
  'day': 'días',
  'month': 'meses',
  'year': 'años'
}

const singleTimeUnits = {
  'minute': 'minuto',
  'day': 'día',
  'month': 'mes',
  'year': 'año'
}

const places = {
  'central_offices': 'Oficinas centrales',
  'regional_offices': 'Oficinas regionales',
  'financial_institution': 'Instituciones financieras',
  'online': 'En línea',
  'treasury': 'Ministerio de Hacienda',
  'other': 'Otros'
}

const currencies = {
  'dollar': '$',
  'colon': '₡'
}

export default class ProcedureDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      data: { procedure: { name: '', institution: {}}, class: { name: ''}}
    };
  }

  componentDidMount() {
    let resPath = 'modes';
    // let addressesPath =
    //   'addresses(detail,schedule,phone,responsible_name,responsible_position,'+
    //   'municipality(name, department(name)))';
    let legalBasePath =
      'legal_base(type,legislation_name,legislation_reference,legal_topic(name))';
    let procedurePath = 'procedure(name,institution(name))';
    let formsPath = 'forms(name,url)';
    let classPath = 'class(name)';

    let params =
      '?select=*,'+addressesPath+','+legalBasePath+','+classPath+','+procedurePath+','+formsPath+
      '&id=eq.' + this.state.id;
    // HttpService.getResource(resPath, params).then(data => console.log(data));
    HttpService.getResource(resPath, params).then(data => this.setState({data: data[0]}));
  }

  getTimeVal(key, amount) { return amount===1 ? singleTimeUnits[key] : timeUnits[key]; }

  getPlaces(placesArray) {
    return placesArray.reduce((acc, curr, i) => acc + (i === 0 ? '' : ', ') + places[curr], '');
  }

  render() {
    return (
      <div>
        <section className='text-left' id='section-procedures' style={sectionStyle}>
          <div className='container'>
            <div className='row align-items-center justify-content-center procedure-detail'>
              <div className='col-md-12'>
                <div className='row'>
                  <div className='col-md-12' style={headerStyle}>
                    <ProcedureName text={this.state.data.procedure.name} />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12' style={modeTextStyle}>
                    {this.state.data.name}
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-8'>
                    <div className='row' style={generalElementStyle}>
                      <div className='col-md-12'>
                        {this.state.data.description}.
                      </div>
                    </div>
                    <div className='row' style={generalElementStyle}>
                      <div className='col-md-12'>
                        <h5>¿Quiénes están obligados?</h5>{this.state.data.subject}.
                      </div>
                    </div>
                    <div className='row' style={generalElementStyle}>
                      <div className='col-md-12'>
                        <h5>¿Cuáles son los requisitos?</h5>
                        <ol type='a'>
                          <li>
                            Solicitud de traslado, especificando las características del equipo y la
                            nueva dirección
                          </li>
                          <li>Cartel original que se emitió al momento de la autorización</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='row'>
                      <div className='card'>
                        <div className='card-body'>
                          <h5 style={cardElementStyle} className='card-title'>
                            {this.state.data.code}
                          </h5>
                          <h6 style={cardElementStyle} className='card-subtitle mb-2 text-muted'>
                            {this.state.data.procedure.institution.name}
                          </h6>
                          <URL
                              style={cardElementStyle}
                              href='https://miempresa.gob.sv/'
                              text='Trámite en línea' />
                          <i className='pull-right fas fa-external-link-alt action-icon'></i>
                          <br /><br />
                          <p>
                            <span style={itemHeaderStyle}>Presentación: </span>
                            {presentationMeans[this.state.data.presentation_means]}.
                          </p>
                          {(this.state.data.charge_amount || this.state.data.charge_link) && (
                            <div>
                              <p>
                                <span style={itemHeaderStyle}>Costo: </span>
                                {this.state.data.charge_link ? (
                                  <URL href={this.state.data.charge_link} text='Ver archivo'/>
                                ) : (
                                  <span>
                                    {currencies[this.state.data.currency]}
                                    {this.state.data.charge_amount}
                                  </span>
                                )}.
                              </p>
                              <p>
                                <span style={itemHeaderStyle}>Lugares de pago: </span>
                                {this.getPlaces(this.state.data.payment_places)}.
                              </p>
                            </div>
                          )}
                          <p>
                            <span style={itemHeaderStyle}>Tiempo de respuesta: </span>
                            {this.state.data.response_time_amount}&nbsp;
                            {this.getTimeVal(this.state.data.response_time_unit,
                                this.state.data.response_time_amount)}.
                          </p>
                          {this.state.data.legal_time_unit && (
                            <p>
                              <span style={itemHeaderStyle}>Tiempo regulado: </span>
                              {this.state.data.legal_time_amount}&nbsp;
                              {this.getTimeVal(this.state.data.legal_time_unit,
                                  this.state.data.legal_time_amount)}.
                            </p>
                          )}
                          {this.state.data.validity_time_unit && (
                            <p>
                              <span style={itemHeaderStyle}>Vigencia: </span>
                              {this.state.data.validity_time_amount}&nbsp;
                              {this.getTimeVal(this.state.data.validity_time_unit,
                                  this.state.data.validity_time_amount)}.
                            </p>
                          )}
                          <p>
                            <span style={itemHeaderStyle}>Clase: </span>
                            {this.state.data.class.name}.
                          </p>
                          <p>
                            <span style={itemHeaderStyle}>Unidad: </span>
                            {this.state.data.responsible_unit}. {this.state.data.responsible_area}
                          </p>
                          <a href='#' className='badge badge-success'>Subsidios y programas sociales</a>
                          <a href='#' className='badge badge-success'>Inicio y operación de negocios</a>
                          <a href='#' className='badge badge-success'>Seguridad, defensa y materiales peligrosos</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row procedure-legal-base'>
                  <div className='col-md-12'>
                    <h6>Base legal</h6>
                    <table className='table table-bordered table-striped table-hover'>
                      <tbody>
                        <tr>
                          <td>Fundamento que da origen al trámite</td>
                          <td>art. 50, 115 Reglamento del Código Tributario.</td>
                        </tr>
                        <tr>
                          <td>Institución/Unidad responsable</td>
                          <td>art. 34 Código tributario</td>
                        </tr>
                        <tr>
                          <td>Requisitos</td>
                          <td>Todo Instrucciones de Trabajo</td>
                        </tr>
                        <tr>
                          <td>Plazos de respuesta</td>
                          <td>Todo Instrucciones de Trabajo</td>
                        </tr>
                        <tr>
                          <td>Vigencia</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Tarifas o derechos</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
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