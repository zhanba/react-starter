import 'babel-polyfill'
import { AppContainer } from 'react-hot-loader'
// AppContainer is a necessary wrapper component for HMR

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Redbox, { RedBoxProps } from 'redbox-react'

import App from './App'
import configureStore from './redux/configureStore'

const store = configureStore()

const CustomErrorReporter = (prop: RedBoxProps) => <Redbox error={prop.error} />

const render = (Component: React.ReactElement<any>) => {
  ReactDOM.render(
    <AppContainer errorReporter={CustomErrorReporter}>
      {Component}
    </AppContainer>,
    document.getElementById('root') as HTMLElement,
  )
}

render(<App store={store} />)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(<App store={store} />)
  })
}
