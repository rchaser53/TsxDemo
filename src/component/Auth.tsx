import * as React from 'react'
import { Connection } from 'jsforce'
import { InjectedRouter } from 'react-router'

declare const require
const {
	loginId, password
} = require('../../env')

const conn = new Connection({
								proxyUrl: 'http://localhost:3000/proxy'
							})

export interface Props {
	router: InjectedRouter
}

export class Auth extends React.Component<Props, {}> {
	componentDidMount() {
		conn.login(loginId, password, (err) => {
			if (err) {
					throw new Error(JSON.stringify(err))
			}
			this.props.router.replace('nyon')
		})
	}

	render() {
		return <div>loading</div>
	}
}
export default Auth