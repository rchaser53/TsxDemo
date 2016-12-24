import * as React from 'react'
import { Connection } from 'jsforce'
import { InjectedRouter } from 'react-router'

declare const require
const {
	loginId, password
} = require('../../env')

export interface Props {
	router: InjectedRouter
}

export class Auth extends React.Component<Props, {}> {
	context: {
		conn: Connection
	}
	static contextTypes = {
		conn: React.PropTypes.any
	}

	constructor() {
		super()
		this.saveLoginId = this.saveLoginId.bind(this)
		this.saveLoginId = this.saveLoginId.bind(this)
		this.loginSF = this.loginSF.bind(this)
	}

	loginIdInput: HTMLInputElement
	passwordInput: HTMLInputElement

	saveLoginId(event) {
		console.log(event.target.value)
	}

	savePassword(event) {
		console.log(event.target.value)
	}

	loginSF() {
		this.context.conn.login(this.loginIdInput.value, this.passwordInput.value, (err) => {
			if (err) {
					throw new Error(JSON.stringify(err))
			}
			this.props.router.replace('/field')
		})
	}

	render() {
		return 	<div>
							<div>Login Id<input ref={(elem) => {this.loginIdInput = elem}} onChange={this.saveLoginId} /></div>
							<div>Pass Word<input ref={(elem) => {this.passwordInput = elem}} onChange={this.saveLoginId} /></div>
							<button onClick={this.loginSF}>login</button>
						</div>
	}
}
export default Auth