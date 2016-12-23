import * as React  from 'react'
import * as ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { Connection } from 'jsforce'

import { State } from './reducer/reducer'

import App from './component/App'
import Auth from './component/Auth'
import FieldArea from './component/FieldArea'
import OutputArea from './component/OutputArea'

import { Store, createStore } from 'redux'
import reducer from './reducer/reducer'
import store from './store'

const conn = new Connection({
								proxyUrl: 'http://localhost:3000/proxy'
							})

ReactDOM.render(
	<Provider store={store}>
		<App dispatch={store.dispatch} conn={conn}>
			<Router history={browserHistory}>
				<Route path='/' onEnter={(nextState, replace) => {
						if (conn.userInfo === undefined) {
							console.log(nextState)
							replace('/auth')
						}
				}}>
					<Route path='field' component={FieldArea} />
				</Route>
				<Route path='/auth' component={Auth} />
			</Router>
		</App>
	</Provider>, document.querySelector('#root')
)