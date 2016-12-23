import createSagaMiddleware from 'redux-saga'
import {
	TakeEffect,
	PutEffect,
	ForkEffect,
	call,
	put,
	take,
	fork
} from 'redux-saga/effects'
import { Store, createStore, applyMiddleware } from 'redux'

import reducer from './reducer/reducer'

export function* RootSaga (): IterableIterator<ForkEffect> {
	yield fork(setLookup)
	// yield fork(setLookup(conn, store));
	// yield fork(deleteUnit(store));
	// yield fork(transferUnit(store));
}




const sagaMiddleware = createSagaMiddleware()
const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(RootSaga)
// const store = createStore(reducer)


export function* setLookup(): IterableIterator<PutEffect<{type: string}> | TakeEffect<string>> {
		while (true) {
			console.log(1)
			yield take<string>('FECTH_NEW_SOBJECT')
			console.log(2)
			// const {payload} = yield take(UnitTypes.GET_LOOKUP_INFO)
			// const {unitId, sObjcetName, describeSObjects} = payload
			// const ret = yield call(getDescribeSObjectAsync, conn, unitId, sObjcetName, describeSObjects)
			yield put({type: 'PPP'})
		}
	}
export default store