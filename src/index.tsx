import * as React  from 'react'
import * as ReactDOM from 'react-dom'
import { Connection } from 'jsforce'
import { Provider } from 'react-redux'

import { State } from './reducer/reducer'

import App from './component/App'
import { Store, createStore } from 'redux'
import reducer from './reducer/reducer'

declare const require
const {
	loginId, password
} = require('../env')

const conn = new Connection({
								proxyUrl: 'http://localhost:3000/proxy'
							})

conn.login(loginId, password, (err) => {
	if (err) {
			throw new Error(JSON.stringify(err))
	}
	const store = createStore(reducer)

	ReactDOM.render(
		<Provider store={store}>
			<App dispatch={store.dispatch} conn={conn} />
		</Provider>, document.querySelector('#root'))
})