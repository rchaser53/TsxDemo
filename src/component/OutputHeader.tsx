import * as React from 'react'
import { shouldComponentUpdate } from 'react-addons-pure-render-mixin'

import {
	objectHeader,
	objectHeaderFirstData,
	objectHeaderSecondData
} from '../../css/component'

export class OutputHeader extends React.Component<{}, {}> {
	shouldComponentUpdate: Function
	constructor() {
		super()
		this.shouldComponentUpdate = shouldComponentUpdate.bind(this)
	}

  render() {
				return <div key={name} className={objectHeader}>
								<div className={objectHeaderFirstData}>name</div>
								<div className={objectHeaderSecondData}>label</div>
							</div>
	}
}
export default OutputHeader