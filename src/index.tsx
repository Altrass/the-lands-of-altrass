import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { HashRouter as Router } from 'react-router-dom'

import 'react-hot-loader/patch'
import { AppContainer } from 'react-hot-loader'

import App from './App'

const renderApp = () => {
  try {
    ReactDOM.render(
      <AppContainer>
        <Router>
          <App/>
        </Router>
      </AppContainer>,
      document.getElementById('app')
    )
  } catch (err) {
    console.log(err)
  }
}

renderApp()

if (module.hot) {
  module.hot.accept(() => { renderApp() })
}
