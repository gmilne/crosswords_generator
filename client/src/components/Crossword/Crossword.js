import React from 'react'
import style from './crossword.less'
import CrosswordGridItem from '../CrosswordGridItem/CrosswordGridItem'
import { Table, TableRow } from '@material-ui/core'

const dummyData = [
    ["a", "b", "c", "#", "e", "f", "g"],
    ["h", "i", "j", "#", "l", "m", "n"],
    ["o", "p", "q", "#", "s", "t", "u"],
    ["v", "w", "x", "y", "z", "1", "2"],
    ["3", "4", "5", "6", "7", "8", "9"],
    ["10", "11", "#", "13", "14", "15", "16"],
    ["17", "18", "19", "20", "21", "22", "23"],
]


class Crossword extends React.Component {
    renderCrossword(answers) {
        let crossword = []
        answers.forEach(row => {
            let crossRow = [] 
            row.forEach(cell => {
                crossRow.push(<CrosswordGridItem text={cell}/>)
            })
            crossword.push(<TableRow>{crossRow}</TableRow>)
        })
        return <Table>{crossword}</Table>
    }
    render() {
        return <div>{this.renderCrossword(dummyData)}</div>
    }
}
export default Crossword
