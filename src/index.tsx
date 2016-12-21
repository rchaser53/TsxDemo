import * as React  from 'react'
import * as ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { Connection } from 'jsforce'

import { State } from './reducer/reducer'

import App from './component/App'
import Auth from './component/Auth'
import { Store, createStore } from 'redux'
import reducer from './reducer/reducer'

	const store = createStore(reducer)

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

	ReactDOM.render(
		<Provider store={store}>
			<App dispatch={store.dispatch} conn={conn}>
				<Router history={browserHistory}>
					<Route path='/' component={Auth} />
				</Router>
			</App>
		</Provider>, document.querySelector('#root'))
})