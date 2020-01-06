export const enterLetter = (letter, pos)  => ({
    type: 'ENTER_LETTER',
    letter, 
    pos
})

export const selectCell = (x, y) => ({
    type: 'SELECT_CELL',
    x, 
    y
})