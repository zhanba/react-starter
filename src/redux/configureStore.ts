import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers, { IStoreState } from '../reducers/index'

export default function configureStore() {
  const store = createStore<IStoreState>(
    reducers,
    composeWithDevTools(),
  )
  return store
}
