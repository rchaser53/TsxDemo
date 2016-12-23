import * as React from 'react'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { Connection, Field } from 'jsforce'
import { InjectedRouter } from 'react-router'

import { State } from '../reducer/reducer'
import { fetchNewSObject } from '../action/sobject'

import OutputArea from './OutputArea'
import SelectObject from './SelectObject'

export const mapStateToProps = (state: State): TStateProps => {
	const {
		objectName, fields
	} = state.sobject
	return {
		objectName,
		fields
	}
}

export interface OwnProps {
	dispatch: Dispatch<Action>
	conn: Connection
}

export interface TStateProps {
	readonly objectName: string
	readonly fields: Field[]
}

export interface Props extends OwnProps, TStateProps {}

export class FieldArea extends React.Component<Props, {}> {
	context: {
		dispatch: Dispatch<Action>
		conn: Connection
	}
	static contextTypes = {
		dispatch: React.PropTypes.any,
		conn: React.PropTypes.any
	}

	selectObject(event) {
		this.changeObject(event.target.value)
	}

	changeObject(objectName: string) {
		const { dispatch, conn } = this.context
		fetchNewSObject(objectName, conn, dispatch)
	}

	render() {
		const { objectName, fields } = this.props
		console.log(this.context.conn)
		return 	<div>
							<SelectObject selectObject={this.selectObject} />
							<OutputArea objectName={objectName} fields={fields} />
						</div>
	}
}
export default connect<TStateProps, {}, OwnProps>(mapStateToProps)(FieldArea)