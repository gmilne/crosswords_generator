import React from 'react'
import { connect } from 'react-redux'
import { Table, TableRow } from '@material-ui/core'
// import style from './crossword.less'
import CrosswordGridItem from '../CrosswordGridItem/CrosswordGridItem'
import { enterLetter, selectCell } from '../../actions/boardActions'

class Crossword extends React.Component {

    handleEnterLetter = (letter, x, y) => {
        console.log(e.keyCode)
        // this.props.enterLetter(letter, { x, y })
    }

    handleSelectCell = (x, y) => {
        this.props.selectCell(x, y)
    }

    renderCrossword(answers) {
        let crossword = []
        answers.forEach((row, idxY) => {
            let crossRow = []
            row.forEach((cell, idxX) => {
                crossRow.push(<CrosswordGridItem 
                                selectCell={this.handleSelectCell}
                                selected={this.props.selected.x === idxX && this.props.selected.y === idxY} 
                                x={idxX} 
                                y={idxY} 
                                letter={cell} 
                                />)
            })
            crossword.push(<TableRow>{crossRow}</TableRow>)
        })
        return <Table>{crossword}</Table>
    }
    render() {
        return <div onKeyDown={this.handleEnterLetter}>{this.renderCrossword(this.props.board)}</div>
    }
}

const mapStateToProps = state => {
    return {
        board: state.board.board,
        selected: state.board.selected
    }
}

const mapDispatchToProps = dispatch => ({
    enterLetter: (letter, pos) => {
        dispatch(enterLetter(letter, pos))
    },
    selectCell: (x, y) => dispatch(selectCell(x, y))
})

export default connect(mapStateToProps, mapDispatchToProps)(Crossword)
