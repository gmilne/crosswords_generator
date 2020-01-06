const initState = {
    board :[
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
    ],
    selected: {x:-1, y:-1},
}

const boardReducer = (state = initState, action) => {
    const board = Object.assign(state.board)
    switch (action.type) {
      case 'ENTER_LETTER':
        board[action.pos.y][action.pos.x] = action.letter
        console.log(board)
        return {
            ...state, 
            board
        };
      case 'SELECT_CELL':
          let x = action.x
          let y = action.y
          if (state.selected.x === action.x && state.selected.y === action.y){
              x = -1
              y = -1
          }
        return {
            ...state,
            selected:{x, y}
        }
      default:
        return state;
    }
  }
  
  export default boardReducer;