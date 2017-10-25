import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Homepage from './components/Homepage'
import Main from './components/Main'

const App = () => {
  return(
    <Switch>
      <Route exact path='/' render={(props) => (<Main {...props} />)} />
      <Route exact path='/login' render={(props) => (<Main {...props} />)} />
      <Route exact path='/register' render={(props) => (<Main {...props} />)} />
      <Route exact path='/homepage' render={(props) => (<Main {...props}/>)} />
    </Switch>
  )
}

export default App
