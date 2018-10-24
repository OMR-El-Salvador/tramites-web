import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const itemSt = { marginLeft: '1.2em' }

const linkSt = {
  color: 'white',// !important;
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 500
}

export default class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark' id='pb-navbar'>
        <div className='container'>
          <Link
            className='navbar-brand site-title'
            style={{fontSize: '2em'}}
            to='/'>
            gob<span className='title-dot'></span>sv
          </Link>
          <button className='navbar-toggler ml-auto' type='button' data-toggle='collapse' data-target='#probootstrap-navbar' aria-controls='probootstrap-navbar'
            aria-expanded='false' aria-label='Toggle navigation'>
            <span><i className='fas fa-bars'></i></span>
          </button>
          <div className='collapse navbar-collapse' id='probootstrap-navbar'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item' style={itemSt}>
                <Link style={linkSt} to='/data'>Datos</Link>
              </li>
              <li className='nav-item' style={itemSt}>
                <Link style={linkSt} to='/categories'>Categorías</Link>
              </li>
              <li className='nav-item' style={itemSt}>
                <Link style={linkSt} to='/about'>Glosario</Link>
              </li>
              <li className='nav-item' style={itemSt}>
                <Link style={linkSt} to='/about'>Acerca de</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
