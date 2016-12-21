import * as React from 'react'
import { Connection } from 'jsforce'
import { InjectedRouter } from 'react-router'

export interface Props {
	router: InjectedRouter
}

export class Auth extends React.Component<Props, {}> {
	render() {
		return <div>complete</div>
	}
}
export default Auth