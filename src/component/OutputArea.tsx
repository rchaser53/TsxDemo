import * as React from 'react'
import { Connection, Field } from 'jsforce'

import OutputHeader from './OutputHeader'
import OutputRow from './OutputRow'

export interface Props {
	readonly objectName: string
	readonly fields: Field[]
}

export default class OutputArea extends React.Component<Props, {}> {
	render() {
		const { objectName, fields } = this.props

		return (<div>
							<div className='objectHeader'>{`object name: ${objectName}`}</div>
							<OutputHeader />
							{
								fields.map(({name, label}) => {
									return <OutputRow key={name} name={name} label={label} />
								})
							}
					</div>)
	}
}