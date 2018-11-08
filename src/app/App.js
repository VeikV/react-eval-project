import './app.scss'

import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router-dom'

import Header from 'components/header/header'
import {Routes} from 'routes'

@withRouter
export default class App extends Component {
  render () {
    return (
      <Fragment>
        <div styleName='container'>
          <Header />
          <main>
            <Routes {...this.props} />
          </main>
        </div>
      </Fragment>
    )
  }
}
