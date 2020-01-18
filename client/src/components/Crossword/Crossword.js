import React from 'react'
import { connect } from 'react-redux'
import style from './crossword.less'
import { enterLetter, selectCell, switchAxis,removeLetter } from '../../actions/boardActions'
import CrosswordRow from '../CrosswordRow/CrosswordRow'

class Crossword extends React.Component {

    handleEnterLetter = (e) => {
        console.log(e.keyCode)
        if (e.keyCode > 64 && e.keyCode < 91) {
            const letter = String.fromCharCode(e.keyCode)
            this.props.enterLetter(letter)
        }
        if (e.keyCode === 32) {
            this.props.switchAxis()
        }
        if (e.keyCode === 8 || e.keyCode === 46){
            this.props.removeLetter()
        }
    }

    handleSelectCell = (x, y) => {
        this.props.selectCell(x, y)
    }

    renderCrossword(answers) {
        let crossword = []
        answers.forEach((row, idxY) => {
            crossword.push(
                <CrosswordRow
                    axis={this.props.axis}
                    selected={this.props.selected}
                    rowIndex={idxY}
                    selectCell={this.handleSelectCell}
                    items={row} />)
        })
        return crossword
    }
    render() {
        return (
            <div tabIndex="0" onKeyDown={this.handleEnterLetter} className={style.crossword_parent}>
                {this.renderCrossword(this.props.board)}
            </div>)
    }
}

const mapStateToProps = state => {
    return {
        board: state.board.board,
        selected: state.board.selected,
        axis: state.board.axis
    }
}

const mapDispatchToProps = dispatch => ({
    enterLetter: (letter, pos) => {
        dispatch(enterLetter(letter, pos))
    },
    selectCell: (x, y) => dispatch(selectCell(x, y)),
    switchAxis: () => dispatch(switchAxis()),
    removeLetter: () => dispatch(removeLetter())
})

export default connect(mapStateToProps, mapDispatchToProps)(Crossword)
