import React from 'react'
import { connect } from 'react-redux'
import { updateName } from '../actions'
import Crossword from './Crossword/Crossword'

const Home = ({ name, onChange }) => <div></div>

const mapStateToProps = state => {
	return {
		name: state.name,
	}
}

const mapDispatchToProps = dispatch => ({
	onChange: value => {
		dispatch(updateName(value))
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
