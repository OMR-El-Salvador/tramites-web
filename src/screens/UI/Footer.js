import React, { Component } from 'react'
import FooterImg from '../../img/footer.jpg'

const itemStyle = {
  fontSize: '2em',
  marginLeft: '1em'
}

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <hr />
        <div className='container'>
          <div className='row text-center'>
            <div className='col-md-3 text-center'>
              <a href='http://omr.gob.sv'>http://omr.gob.sv</a>
            </div>
            <div className='col-md-3'>
              <ul className='list-inline'>
                <li className='list-inline-item' style={itemStyle}>
                  <a href='https://www.facebook.com/OMRsv/'><i className='fab fa-facebook'></i></a>
                </li>
                <li className='list-inline-item' style={itemStyle}>
                  <a href='https://twitter.com/OMR_sv'><i className='fab fa-twitter'></i></a>
                </li>
                <li className='list-inline-item' style={itemStyle}>
                  <a href='https://www.linkedin.com/company/omr-sv/'>
                    <i className='fab fa-linkedin'></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-md-6'>
              <img src={FooterImg} alt='Participantes: MCC, FOMILENIO II, OMR, GOES' />
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
