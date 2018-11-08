import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import './header.scss'

export default class Header extends Component {
  render () {
    return (
      <header styleName='header'>
        <nav styleName='nav'>
          <NavLink styleName='nav-link' to='/about'>About</NavLink>
          <NavLink styleName='nav-link' to='/repos'>Repos</NavLink>
        </nav>
      </header>
    )
  }
}
