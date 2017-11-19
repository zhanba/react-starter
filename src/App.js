import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/style/normalize.css'
import Layout from './layout/Layout'

const App = (props) => (
  <Provider store={props.store}>
    <Router>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  </Provider>
)

App.propTypes = {
  store: PropTypes.shape().isRequired
}

export default App
