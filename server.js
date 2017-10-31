import express from 'express'
import React from 'react'
import expressJWT from 'express-jwt'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './src/js/reducers/index'
import bodyParser from 'body-parser'
import cors from 'cors'
import config from './config'
import apiRouter from './api'
import App from './src/js/App'

const app = express()

app.use(cors())

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(expressJWT({secret: config.secret}).unless({
  path: ['/', '/login', '/register', '/api/login', '/api/register', '/homepage']
}))

app.use(expressJWT({
  secret: config.secret,
  credentialsRequired: false,
  getToken: (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
      return req.query.token;
    }
    return null;
  }
}))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api', apiRouter)

app.get('*', (req, res, next) => {
  let context = {}
  const store = createStore(reducer, applyMiddleware(thunk))
  const initialMarkup = renderToString(
    <StaticRouter location={req.url} context={context} ><Provider store={store}><App />
    </Provider></StaticRouter>
  )
  const preloadedState = store.getState()
  res.render('index', {
    initialMarkup,
    preloadedState
  })
})

app.listen(config.port, config.host, () => {
  console.info(`Express is listening on port ${config.port}`)
})
