import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import Hello from './components/Hello'
import NoMatch from './components/NoMatch'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Hello}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  )
}

export default App
