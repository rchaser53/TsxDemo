import * as React from 'react'
import * as PureRenderMixin from 'react-addons-pure-render-mixin'

export class NotFound extends React.Component<{}, {}> {
	shouldComponentUpdate
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

	render() {
		return	<h1>Page Not Found</h1>
	}
}
export default NotFound