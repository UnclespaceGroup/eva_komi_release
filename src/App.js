import React, { Component } from 'react'
import Landing from './pages/Landing'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import HttpsRedirect from 'react-https-redirect'

class App extends Component {
  render () {
    return (
      <HttpsRedirect>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Landing} />
          </Switch>
        </BrowserRouter>
      </HttpsRedirect>
    )
  }
}

export default App
