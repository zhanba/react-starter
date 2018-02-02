import * as React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import EditorLayout from './layout/EditorLayout'
import MainLayout from './layout/MainLayout'
import { IStoreState } from './types/index'

export interface IProps {
  store: any
}

const App = (props: IProps) => (
  <Provider store={props.store}>
    <Router>
      <Switch>
        <Route path="/" component={MainLayout} />
        <Route path="/editor" component={EditorLayout} />
      </Switch>
    </Router>
  </Provider>
)

export default App
