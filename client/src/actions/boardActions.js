
export const ENTER_LETTER = 'ENTER_LETTER'
export const enterLetter = letter => ({
    type: 'ENTER_LETTER',
    letter,
})

export const SELECT_CELL = 'SELECT_CELL'
export const selectCell = (x, y) => ({
    type: 'SELECT_CELL',
    x, 
    y
})

export const SWITCH_AXIS = 'SWITCH_AXIS'
export const switchAxis = () => ({
    type: SWITCH_AXIS
})

export const REMOVE_LETTER = 'REMOVE_LETTER'
export const removeLetter = () =>({
    type: REMOVE_LETTER
})