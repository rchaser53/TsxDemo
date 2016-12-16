import { Action } from 'redux'
import { Field, Connection } from 'jsforce'

export interface FetchNewSObject extends Action {
	payload: {
		objectName: string
		fields: Field[]
	}
}
export const FECTH_NEW_SOBJECT = 'FECTH_NEW_SOBJECT'
export const fetchNewSObject = (objectName: string, conn: Connection, dispatch): void => {
	conn.sobject(objectName).describe((err, ret) => {
		if (err || !ret) {
			throw new Error(JSON.stringify(err))
		}
		dispatch({
			type: FECTH_NEW_SOBJECT,
			payload: {
				objectName: ret.name,
				fields: ret.fields,
			}
		})
	})
}
export const isFECTH_NEW_SOBJECT = (action: Action) : action is FetchNewSObject => {
	return action.type === FECTH_NEW_SOBJECT
}