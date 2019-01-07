import React, { Component } from 'react'
import Landing from './pages/Landing'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Landing} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
