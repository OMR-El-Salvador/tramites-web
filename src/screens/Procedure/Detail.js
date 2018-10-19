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

export default class ProcedureDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { id: this.props.match.params.id, data: { procedure_name: '', institution: '' } };
  }

  componentDidMount() {
    let resPath = 'mode_detail';
    let params = '?id=eq.' + this.state.id;
    HttpService.getResource(resPath, params).then(data => this.setState({data: data[0]}));
  }

  getTimeVal(key, amount) { return amount===1 ? singleTimeUnits[key] : timeUnits[key]; }

  render() {
    return (
      <div>
        <section className='text-left' id='section-procedures' style={sectionStyle}>
          <div className='container'>
            <div className='row align-items-center justify-content-center procedure-detail'>
              <div className='col-md-12'>
                <div className='row'>
                  <div className='col-md-12' style={headerStyle}>
                    <ProcedureName text={this.state.data.procedure_name} />
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
                            {this.state.data.institution}
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
                            <p>
                              <span style={itemHeaderStyle}>Costo: </span>
                              {this.state.data.charge_link ? (
                                <URL href={this.state.data.charge_link} text='Ver archivo'/>
                              ) : (
                                <span>{presentationMeans[this.state.data.charge_amount]}.</span>
                              )}.
                            </p>
                          )}
                          <p>
                            <span style={itemHeaderStyle}>Tiempo de respuesta: </span>
                            {this.state.data.response_time_amount}&nbsp;
                            {this.getTimeVal(this.state.data.response_time_unit,
                                this.state.data.response_time_amount)}.
                          </p>
                          <p>
                            <span style={itemHeaderStyle}>Clase: </span>
                            {this.state.data.class}.
                          </p>
                          {this.state.data.validity_time_unit && (
                            <p>
                              <span style={itemHeaderStyle}>Vigencia: </span>
                              {this.state.data.validity_time_amount}&nbsp;
                              {this.getTimeVal(this.state.data.validity_time_unit,
                                  this.state.data.validity_time_amount)}.
                            </p>
                          )}
                          {this.state.data.legal_time_unit && (
                            <p>
                              <span style={itemHeaderStyle}>Tiempo regulado: </span>
                              {this.state.data.legal_time_amount}&nbsp;
                              {this.getTimeVal(this.state.data.legal_time_unit,
                                  this.state.data.legal_time_amount)}.
                            </p>
                          )}
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
                <hr />
                <hr />
                <hr />
                <hr />
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='row'>
                      <div className='col-md-12'><h6>Dirección, Horario y contacto</h6></div>
                    </div>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='address-list'>
                          <div className='card-header'>
                            <div className='card-header' id='heading-card-1'>
                              <h5 className='mb-0'>
                                <button className='btn btn-link' data-toggle='collapse'
                                  data-target='#procedureCollapse1'
                                  aria-expanded='true'
                                  aria-controls='procedureCollapse1'>
                                  Ahuachapán
                                </button>
                              </h5>
                            </div>
                            <div id='procedureCollapse1'
                              className='collapse'
                              aria-labelledby='heading-card-1'
                              data-parent='#accordion'>
                              <div className='card-body'>
                                <p>
                                  <strong>Ahuachapán </strong>
                                  Cantón Puente El Jobo, Ahuachapán Km. 112. <br />
                                  <i className='fas fa-clock'></i> Lun - Dom 06:00 am - 10:00pm
                                  <br />
                                  <i className='fas fa-phone'></i> 2244-6422 <br />
                                  <i className='fas fa-user'></i>Cajeros de Aduana: Dany Bonilla y
                                      Carlos Luna <br />
                                  <i className='fas fa-envelope'></i> dany.bonilla@mh.gob.sv y
                                      carlos.luna@mh.gob.sv
                                </p>
                                <hr />
                                <p>
                                  <strong>Ahuachapán </strong>
                                  Cantón Puente El Jobo, Ahuachapán Km. 112. <br />
                                  <i className='fas fa-clock'></i> Lun - Dom 06:00 am - 10:00pm
                                  <i className='fas fa-phone'></i> 2244-6422
                                  <i className='fas fa-user'></i>Cajeros de Aduana: Dany Bonilla y
                                      Carlos Luna
                                  <i className='fas fa-envelope'></i> dany.bonilla@mh.gob.sv y
                                      carlos.luna@mh.gob.sv
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className='card-header'>
                            <div className='card-header' id='heading-card-2'>
                              <h5 className='mb-0'>
                                <button className='btn btn-link' data-toggle='collapse'
                                  data-target='#procedureCollapse2'
                                  aria-expanded='true'
                                  aria-controls='procedureCollapse2'>
                                  Santa Ana
                                </button>
                              </h5>
                            </div>
                            <div id='procedureCollapse2'
                              className='collapse'
                              aria-labelledby='heading-card-2'
                              data-parent='#accordion'>
                              <div className='card-body'>
                                <p>
                                  <strong>Santa Ana </strong>
                                  Cantón Puente El Jobo, Santa Ana Km. 112. <br />
                                  <i className='fas fa-clock'></i> Lun - Dom 06:00 am - 10:00pm
                                  <br />
                                  <i className='fas fa-phone'></i> 2244-6422 <br />
                                  <i className='fas fa-user'></i>Cajeros de Aduana: Dany Bonilla y
                                      Carlos Luna <br />
                                  <i className='fas fa-envelope'></i> dany.bonilla@mh.gob.sv y
                                      carlos.luna@mh.gob.sv
                                </p>
                                <hr />
                                <p>
                                  <strong>Santa Ana </strong>
                                  Cantón Puente El Jobo, Santa Ana Km. 112. <br />
                                  <i className='fas fa-clock'></i> Lun - Dom 06:00 am - 10:00pm
                                  <i className='fas fa-phone'></i> 2244-6422
                                  <i className='fas fa-user'></i>Cajeros de Aduana: Dany Bonilla y
                                      Carlos Luna
                                  <i className='fas fa-envelope'></i> dany.bonilla@mh.gob.sv y
                                      carlos.luna@mh.gob.sv
                                </p>
                              </div>
                            </div>
                          </div>
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