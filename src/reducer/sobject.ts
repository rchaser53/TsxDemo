import { Action } from 'redux'
import { Field } from 'jsforce'

import {
	isFECTH_NEW_SOBJECT
} from '../action/sobject'

export interface SObject {
	objectName: string,
	fields: Field[]
}

export const sobject = {
	objectName: '',
	fields: []
}

export default (state: SObject = sobject, action: Action): SObject => {
	if (isFECTH_NEW_SOBJECT(action)) {
		return { ...state, objectName: action.payload.objectName, fields: action.payload.fields}
	}

	return state
}