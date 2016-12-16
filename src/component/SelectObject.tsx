import * as React from 'react'

export interface Props {
    selectObject: React.EventHandler<React.MouseEvent<HTMLSelectElement>>
}

export class SelectSObject extends React.Component<Props, {}> {
  	render() {
		return (<div>
                    select object
                    <select style={{marginLeft: 10}} type='select' onChange={this.props.selectObject} >
                        <option>Account</option>
                        <option>Event</option>
                        <option>Case</option>
                    </select>
                </div>
		)
	}
}
export default SelectSObject