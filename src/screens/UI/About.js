import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <section id='section-home'>
        <div className='container' style={{marginTop: '1em'}}>
          <h1>Acerca de</h1>
          <p style={{lineHeight: '2em', fontSize: '1.1em'}}>
            Este portal contiene la información sobre trámites de los 14 ministerios que forman el 
            Órgano Ejecutivo del Gobierno de El Salvador. La información <strong>fue brindada al
            Organismo de Mejora Regulatoria por las instituciones</strong> correspondientes como 
            parte del proyecto de simplificación y registro de trámites:&nbsp;
            <a href='http://www.omr.gob.sv/index.php/noticias/4-el-goes-le-apuesta-a-la-simplificacion-de-tramites-y-a-la-creacion-de-un-registro-nacional-de-tramites'>
              Ver más información
            </a>. 
          </p>
          <hr />
          <p style={{lineHeight: '2em', fontSize: '1.1em'}}>
            <span className='fas fa-laptop' /> Código fuente: &nbsp;
            <span className='fab fa-github'/> &nbsp;
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://github.com/OMR-El-Salvador/tramites-web'>
              Repositorio en Github
            </a>.
            <br />
            <span className='fas fa-paint-brush'/> Iconos
            <ul>
              <li>
                <a rel='noopener noreferrer' target='_blank' href='http://www.freepik.com'>
                  makyzz / Freepik
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='http://www.baianat.com/resources/'>
                  Baianat
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' target='_blank' href='https://bit.ly/22d05zk'>
                  Elegant Themes
                </a>
              </li>
            </ul>
          </p>
        </div>
      </section>
    )
  }
}
