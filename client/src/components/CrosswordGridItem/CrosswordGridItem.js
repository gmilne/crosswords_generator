import React from 'react'
import { TextField, TableCell } from '@material-ui/core'
import style from './crosswordgriditem.less'

function CrosswordGridItem(props) {
    const renderCellContent = (content) => {
        if (content == "#") {
            return <TableCell className={style.filled} />
        }
        return (<TableCell className={style.cell}>
                    <TextField 
                        InputProps={{
                            disableUnderline: true,
                            textAlign: "center",
                        }}
                        value={content}/>
                </TableCell>)
    }
    return renderCellContent(props.text)
}

export default CrosswordGridItem