import React from 'react'
import { TextField, TableCell } from '@material-ui/core'
import style from './crosswordrow.less'
import CrosswordGridItem from '../CrosswordGridItem/CrosswordGridItem'

function CrosswordRow(props) {
    const renderRow = () =>{
        let row = [] 
        props.items.forEach((item, indx) => {
            row.push(<CrosswordGridItem x={indx} y={props.rowIndex} axis={props.axis} selected={props.selected} selectCell={props.selectCell} letter={item}/>)
        })
        return (<div className={style.row}>{row}</div>)
    }

    return renderRow()
}

export default CrosswordRow