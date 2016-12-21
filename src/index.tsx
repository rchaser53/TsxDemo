import * as React  from 'react'
import * as ReactDOM from 'react-dom'
import { IndexRedirect, Router, Route, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { Connection } from 'jsforce'

import { State } from './reducer/reducer'

import App from './component/App'
import Auth from './component/Auth'
import FieldArea from './component/FieldArea'
import OutputArea from './component/OutputArea'
import NotFound from './component/NotFound'

import { Store, createStore } from 'redux'
import reducer from './reducer/reducer'

const conn = new Connection({
								proxyUrl: 'http://localhost:3000/proxy'
							})
const store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<App dispatch={store.dispatch} conn={conn}>
			<Router history={browserHistory}>
				<Route path='/'>
					<Route path='field' component={FieldArea} onEnter={(nextState, replace) => {
						if (conn.userInfo === undefined) {
							replace('/auth')
						}
					}} />
					<Route path='auth' component={Auth} />
				</Route>
				<Route path='*' component={NotFound} />
			</Router>
		</App>
	</Provider>, document.querySelector('#root')
)