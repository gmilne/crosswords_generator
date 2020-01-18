import * as boardActions from '../actions/boardActions'

const initState = {
  board: [
    ["#", "", "", "", ""],
    ["", "", "", "#", ""],
    ["", "", "", "#", ""],
    ["", "", "", "#", ""],
    ["#", "#", "", "", ""],
  ],
  selected: { x: -1, y: -1 },
  axis: "x"
}

const boardReducer = (state = initState, action) => {
  const board = state.board.map(row => { return row.slice() })
  const selected = Object.assign(state.selected)
  switch (action.type) {
    case boardActions.ENTER_LETTER:
      board[selected.y][selected.x] = action.letter
      if (
        state.axis === "x"
        && selected.x + 1 < board[selected.y].length
        && board[selected.y][selected.x + 1] !== "#") {
        selected.x += 1
      } else if (
        state.axis === "y"
        && selected.y + 1 < board.length
        && board[selected.y + 1][selected.x] != "#"
      ) {
        selected.y += 1
      }
      return {
        ...state,
        board,
        selected
      };
    case boardActions.SELECT_CELL:
      let x = action.x
      let y = action.y
      if (state.selected.x === action.x && state.selected.y === action.y) {
        x = -1
        y = -1
      }
      return {
        ...state,
        selected: { x, y }
      }
    case boardActions.SWITCH_AXIS:
      if (state.axis === "x") {
        return {
          ...state,
          axis: "y"
        }
      }
      return {
        ...state,
        axis: "x"
      }
    case boardActions.REMOVE_LETTER:
      board[selected.y][selected.x] = ""
      if (
        state.axis === "x"
        && selected.x - 1 >= 0
        && board[selected.y][selected.x - 1] !== "#") {
        selected.x -= 1
      } else if (
        state.axis === "y"
        && selected.y - 1 >= 0
        && board[selected.y - 1][selected.x] != "#"
      ) {
        selected.y -= 1
      }

      return {
        ...state,
        board
      }
    default:
      return state;
  }
}

export default boardReducer;