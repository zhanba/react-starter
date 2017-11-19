import { createStore, combineReducers, applyMiddleware } from 'redux'
// use with redux chrome extension
import { composeWithDevTools } from 'redux-devtools-extension'
// import createHistory from 'history/createBrowserHistory'
// import createHistory from 'history/createHashHistory'
import fetchMiddleware from './fetchMiddleware'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

export default function configureStore(initialState) {
  const enhancer = composeWithDevTools(
    applyMiddleware(fetchMiddleware, thunkMiddleware),
  )

  const store = createStore(
    combineReducers({
      ...rootReducer,
    }),
    initialState,
    enhancer
  )

  return store
}
