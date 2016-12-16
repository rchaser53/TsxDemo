import {
	Action,
	combineReducers
} from 'redux'

import sobject, { SObject } from './sobject'

export interface State {
	sobject: SObject
}

export default combineReducers<State>({
								sobject
							})