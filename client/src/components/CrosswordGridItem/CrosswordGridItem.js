import React from 'react'
import { TextField, TableCell } from '@material-ui/core'
import style from './crosswordgriditem.less'

function CrosswordGridItem(props) {
    const handleEnterLetter = (event) => {
        props.enterLetter(event.target.value, props.x, props.y)
    }
    const renderCellContent = () => {
        if (props.letter == "#") {
            return <TableCell className={style.filled} />
        }
        if (props.selected) {
            return <TableCell
                className={style.selected}
                onClick={() => props.selectCell(props.x, props.y)}>
                {props.letter}
            </TableCell>
        }

        return (<TableCell className={style.cell} onClick={() => props.selectCell(props.x, props.y)}>{props.letter}</TableCell>)
    }
    return renderCellContent()
}

export default CrosswordGridItem