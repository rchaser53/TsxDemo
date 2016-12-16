import * as React from 'react'

import {
	objectRowWrapper,
	objectRowFirstData,
	objectRowSecondData
} from '../../css/component'

export interface Props {
	name: string
	label: string
}

export class OutputRow extends React.Component<Props, {}> {
	render() {
		const {name, label} = this.props
		return (<div key={name} className={objectRowWrapper}>
							<div className={objectRowFirstData}>{name}</div>
							<div className={objectRowSecondData}>{label}</div>
						</div>)
	}
}
export default OutputRow