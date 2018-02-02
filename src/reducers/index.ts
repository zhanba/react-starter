import { combineReducers } from 'redux'
import { IMainModel } from '../model/mainModel'
import { mainReducer } from '../reducers/mainReducer'
// import { IStoreState } from '../types/index'

export interface IStoreState {
  main: IMainModel
}

const reducers = combineReducers<IStoreState>({
  main: mainReducer,
})

export default reducers
