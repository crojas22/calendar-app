import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Main from './components/Main'
import ErrorBoundary from './components/ErrorBoundary'

const App = () => {
  return(
    <ErrorBoundary>
      <Switch>
        <Route exact path='/' render={(props) => (<Main {...props} />)} />
        <Route exact path='/login' render={(props) => (<Main {...props} />)} />
        <Route exact path='/register' render={(props) => (<Main {...props} />)} />
        <Route exact path='/calendar' render={(props) => (<Main {...props}/>)} />
      </Switch>
    </ErrorBoundary>
  )
}

export default App
