import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface BoxState {
  gameGridArr: [number[]] | []
  currPlayer: number
}

const initialState: BoxState = {
  gameGridArr: [],
  currPlayer: 1,
}

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    fillGrid: (state) => {
      let arr: any = new Array(6)
      for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(7).fill(0)
      }
      // Make last row active on initialization
      for (let i = 0; i < 7; i++) {
        arr[5][i] = 5
      }
      state.gameGridArr = arr
    },
    handleBoxClick: {
      reducer(state, action: PayloadAction<{ y: number; x: number }>) {
        const { y, x } = action.payload
        state.gameGridArr[y][x] = state.currPlayer
        if (y > 0) {
          state.gameGridArr[y - 1][x] = 5
        }
        state.currPlayer === 1 ? (state.currPlayer = 2) : (state.currPlayer = 1)
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
