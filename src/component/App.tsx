import * as React from 'react'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { Connection, Field } from 'jsforce'

import { fetchNewSObject } from '../action/sobject'
import { State } from '../reducer/reducer'

import OutputArea from './OutputArea'
import SelectObject from './SelectObject'

export interface OwnProps {
	dispatch: Dispatch<Action>
	conn: Connection
}

export interface TStateProps {
	readonly objectName: string
	readonly fields: Field[]
}

export interface Props extends OwnProps, TStateProps {}

export const mapStateToProps = (state: State): TStateProps => {
	const {
		objectName, fields
	} = state.sobject
	return {
		objectName,
		fields
	}
}

export class Apps extends React.Component<Props, {}> {
	constructor() {
		super()
		this.changeObject = this.changeObject.bind(this)
		this.selectObject = this.selectObject.bind(this)
	}

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

	componentDidMount() {
		// this.changeObject('Account')
	}

	changeObject(objectName: string) {
		const { dispatch, conn } = this.props
		fetchNewSObject(objectName, conn, dispatch)
	}

	selectObject(event) {
		this.changeObject(event.target.value)
	}

	render() {
		const { objectName, fields } = this.props
		return (
			<div>
				<SelectObject selectObject={this.selectObject} />
				<OutputArea objectName={objectName} fields={fields} />
				{ this.props.children }
			</div>
		)
	}
}
export default connect<TStateProps, {}, OwnProps>(mapStateToProps)(Apps)