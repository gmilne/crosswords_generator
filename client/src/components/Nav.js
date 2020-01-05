import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from './AppBar/AppBar'

const s = {
	backgroundColor: '#FFFFFF',
}

const navLinks = () => (
	<AppBar styling={s}>
		<Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
		<Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
	</AppBar>
)

const Nav = () => navLinks()

export default Nav
