import * as React from 'react'
import { Dispatch, Action } from 'redux'
import { Connection } from 'jsforce'

export interface Props {
	dispatch: Dispatch<Action>
	conn: Connection
}

export class Apps extends React.Component<Props, {}> {
	static childContextTypes = {
		dispatch: React.PropTypes.any,
		conn: React.PropTypes.any
	}

	getChildContext() {
		return {
			dispatch: this.props.dispatch,
			conn : this.props.conn
		}
	}

	render() {
		return (
			<div>{ this.props.children }</div>
		)
	}
}
export default Apps