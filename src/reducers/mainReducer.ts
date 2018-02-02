import { EnthusiasmAction } from '../actions/mainAction'
import { IMainModel } from '../model/mainModel'
import { IStoreState } from '../types/index'

const mainState: IMainModel = {
  name: 'main module',
}

export function mainReducer(state = mainState, action: EnthusiasmAction): IMainModel {
  return state
}
