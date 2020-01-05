import React from 'react'
import style from './appbar.less'

const AppBar = props => {
	return (
		<React.Fragment>
			<div className={style.header}>{props.children}</div>
			<div className={style.barBacker}></div>
		</React.Fragment>
	)
}
export default AppBar
