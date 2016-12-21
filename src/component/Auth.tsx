import * as React from 'react'
import { Connection } from 'jsforce'

// declare const require
// const {
// 	loginId, password
// } = require('../../env')

// const conn = new Connection({
// 								proxyUrl: 'http://localhost:3000/proxy'
// 							})

export interface Props {
}

export class Auth extends React.Component<Props, {}> {
	// componentDidMount() {
	// 	conn.login(loginId, password, (err, res) => {
	// 		if (err) {
	// 				throw new Error(JSON.stringify(err))
	// 		}
	// 		console.log(res)
	// 	})
	// }

	render() {
		return <div>nya-n</div>
	}
}
export default Auth