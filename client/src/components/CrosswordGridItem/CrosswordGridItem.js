import React from 'react'
import { Typography } from '@material-ui/core'
import style from './crosswordgriditem.less'

function CrosswordGridItem(props) {
    const handleEnterLetter = (event) => {
        props.enterLetter(event.target.value, props.x, props.y)
    }
    const handleSelectCell = () => {
        props.selectCell(props.x, props.y)
    }

    const getStyle = () => {
        if (props.letter === "#") {
            return style.filled
        } else if (props.selected.x === props.x && props.selected.y === props.y) {
            return style.cell_selected
        } else if ((props.selected.x === props.x && props.axis === 'y') ||  (props.selected.y === props.y && props.axis === 'x') ) {
            return style.row_highlight
        }
        return style.cell
    }

    const renderCell = () => {
        return (
            <div className={getStyle()} onClick={handleSelectCell}>
                <Typography className={style.letter} variant="h4">
                    {props.letter}
                </Typography>
            </div>)
    }

    return renderCell()
}

export default CrosswordGridItem