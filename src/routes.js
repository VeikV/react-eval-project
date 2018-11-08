import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import About from 'containers/about/about'
import Repos from 'containers/repos/repos'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' render={() => <Redirect to='/about' />} />
      <Route path='/about' component={About} />
      <Route path='/repos' component={Repos} />
    </Switch>
  )
}
