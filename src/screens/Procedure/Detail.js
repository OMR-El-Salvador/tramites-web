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

const modeTextStyle = {
  color: '#386CA4',
  fontWeight: '400',
  fontSize: '1.3em'
}

export default class ProcedureDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { id: this.props.match.params.id, data: { } };
  }

  componentDidMount() {
    let resPath = 'mode_detail';
    let params = '?id=eq.' + this.state.id;
    HttpService.getResource(resPath, params).then(data => this.setState({data: data[0]}));
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
                    { this.state.data.procedure_name &&
                    <ProcedureName text={this.state.data.procedure_name} /> }
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-10'>
                    <p style={modeTextStyle}>{this.state.data.name}</p>
                  </div>
                  <div className='col-md-2'>{this.state.data.code}</div>
                </div>
                <div className='row'>
                  <div className='col-md-10'>
                    <p>{this.state.data.description}</p>
                  </div>
                  <div className='col-md-2'>
                    <URL href='https://miempresa.gob.sv/' text='Ver en línea' />
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-md-12'>
                    <p>
                      Sujetos obligados: Comerciantes que inician operación y deben registrar sus
                      máquinas
                    </p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12'>
                    <h6>Requisitos</h6>
                    <ol type='a'>
                      <li>
                        Solicitud de traslado, especificando las carasterísticas del equipo y la
                        nueva dirección
                      </li>
                      <li>Cartel original que se emitio al momento de la autorización</li>
                    </ol>
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-md-4'>
                    <p>Medios de presentación: Presencial y en linea.</p>
                  </div>
                  <div className='col-md-4'>
                    <p>Respuesta: 5 minutos.</p>
                  </div>
                  <div className='col-md-4'>
                    <p>Sin vigencia.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <h6>Costo</h6>
                    <ol type='a'>
                      <li>Monto: 50 colones, 2 colones por cada folio.</li>
                      <li>Lugares: Oficinas Centrales.</li>
                      <li>Métodos: Efectivo y Tarjeta de crédito.</li>
                    </ol>
                  </div>
                  <div className='col-md-6'>
                    <h6>Unidad administrativa</h6>
                    <p>División de registro y asistencia tributaria/Departamento de registro</p>
                  </div>
                </div>
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