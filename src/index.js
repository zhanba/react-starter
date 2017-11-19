import { AppContainer } from 'react-hot-loader'
// AppContainer is a necessary wrapper component for HMR

import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Redbox from 'redbox-react'

import App from './App'
import configureStore from './redux/configureStore'

const store = configureStore()

const CustomErrorReporter = ({ error }) => <Redbox error={error} />

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
}

const render = Component => {
  ReactDOM.render(
    <AppContainer errorReporter={CustomErrorReporter}>
      {Component}
    </AppContainer>,
    document.getElementById('root')
  )
}

render(<App store={store} />)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(<App store={store} />)
  })
}
