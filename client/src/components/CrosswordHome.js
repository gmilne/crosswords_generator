import React from 'react'
import { connect } from 'react-redux'
import { updateName } from '../actions'
import Crossword from './Crossword/Crossword'

class CrosswordHome extends React.Component {

    render(){
        return(
            <div>
            <Crossword ></Crossword>
            </div>
        )
    }
}

const mapStateToProps = state => {
	return {
		board: state.board.board,
	}
}

const mapDispatchToProps = dispatch => ({
	onChange: value => {
		dispatch(updateName(value))
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(CrosswordHome)
