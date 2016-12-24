import * as React from 'react'
import { Dispatch, Action } from 'redux'
import { Connection } from 'jsforce'
import {
	Route,
	InjectedRouter,
	withRouter
} from 'react-router'

export interface Props {
	route: Route
	router: InjectedRouter
}

export class InputArea extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, () => {
      return 'nya-n?'
    })
  }

	render() {
		return 	<div>
							complete
							<button onClick={() => {
								this.props.router.replace('auth')
							}} >abc</button>
							{this.props.children}
						</div>
	}
}
export default withRouter(InputArea)