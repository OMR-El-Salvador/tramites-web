import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-md-4 text-white'>Organismo de Mejora Regulatoria</div>
            <div className='col-md-4'>
              <ul className='list-inline'>
                <li className='list-inline-item'><a href='https://www.facebook.com/OMRsv/' className='p-2'><i className='fab fa-facebook'></i></a></li>
                <li className='list-inline-item'><a href='https://twitter.com/OMR_sv' className='p-2'><i className='fab fa-twitter'></i></a></li>
                <li className='list-inline-item'><a href='https://www.linkedin.com/company/omr-sv/' className='p-2'><i className='fab fa-linkedin'></i></a></li>
              </ul>
            </div>
            <div className='col-md-4'>
              <a className='text-white' href='http://omr.gob.sv'>http://omr.gob.sv</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
