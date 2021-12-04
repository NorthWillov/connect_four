import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface BoxState {
  gameGridArr: [string[]] | []
  history: string[] | []
  currPlayer: string
  winner: string
}

const initialState: BoxState = {
  gameGridArr: [],
  currPlayer: "Red",
  history: [],
  winner: "Draw",
}

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    fillGrid: (state) => {
      let arr: any = new Array(6)
      for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(7).fill("disabled")
      }
      // Make last row boxes enabled on initialization
      for (let i = 0; i < 7; i++) {
        arr[0][i] = "enabled"
      }
      state.gameGridArr = arr.reverse()
    },
    handleBoxClick: {
      reducer(state, action: PayloadAction<{ y: number; x: number }>) {
        const { y, x } = action.payload
        // Give box a color depending on who's turn is
        state.gameGridArr[y][x] = state.currPlayer

        // Check if click win the game
        if (state.winner === "Draw") {
          for (let i = 0; i < state.gameGridArr.length; i++) {
            for (let j = 0; j < 4; j++) {
              // - - - -
              // - - - -
              // - - - -   --->
              // 0 0 0 0
              if (
                state.gameGridArr[i][j] === state.currPlayer &&
                state.gameGridArr[i][j + 1] === state.currPlayer &&
                state.gameGridArr[i][j + 2] === state.currPlayer &&
                state.gameGridArr[i][j + 3] === state.currPlayer
              ) {
                state.winner = state.currPlayer
              }
              // - - - 0    >
              // - - 0 -   /
              // - 0 - -  /
              // 0 - - - /
              if (
                i < 2 &&
                state.gameGridArr[i][j] === state.currPlayer &&
                state.gameGridArr[i + 1][j + 1] === state.currPlayer &&
                state.gameGridArr[i + 2][j + 2] === state.currPlayer &&
                state.gameGridArr[i + 3][j + 3] === state.currPlayer
              ) {
                state.winner = state.currPlayer
              }
              // 0 - - - \
              // - 0 - -  \
              // - - 0 -   \
              // - - - 0    >
              if (
                i > 2 &&
                state.gameGridArr[i][j] === state.currPlayer &&
                state.gameGridArr[i - 1][j + 1] === state.currPlayer &&
                state.gameGridArr[i - 2][j + 2] === state.currPlayer &&
                state.gameGridArr[i - 3][j + 3] === state.currPlayer
              ) {
                state.winner = state.currPlayer
              }
            }
            for (let k = 0; k < 7; k++) {
              // - 0 - -   \
              // - 0 - -   \
              // - 0 - -   \
              // - 0 - -   >
              if (
                i > 2 &&
                state.gameGridArr[i][k] === state.currPlayer &&
                state.gameGridArr[i - 1][k] === state.currPlayer &&
                state.gameGridArr[i - 2][k] === state.currPlayer &&
                state.gameGridArr[i - 3][k] === state.currPlayer
              ) {
                state.winner = state.currPlayer
              }
            }
          }
        }

        // If not outside of grid
        if (y > 0) {
          state.gameGridArr[y - 1][x] = "enabled" // Make upper box enable to click
        }

        state.history = [
          ...state.history,
          `${x}_${state.currPlayer === "Red" ? "Red" : "Yellow"}`, // return string "1_Red" for example
        ]

        // Change players turn
        state.currPlayer === "Red"
          ? (state.currPlayer = "Yellow")
          : (state.currPlayer = "Red")
      },
      prepare(y, x) {
        return {
          payload: { y, x },
        }
      },
    },
  },
})

export const { fillGrid, handleBoxClick } = rootSlice.actions

export default rootSlice.reducer
