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
      state.gameGridArr = arr
    },
    handleBoxClick: {
      reducer(state, action: PayloadAction<{ y: number; x: number }>) {
        const { y, x } = action.payload
        if (!state.gameGridArr[y][x]) {
          state.gameGridArr[y][x] = state.currPlayer
          state.currPlayer === 1
            ? (state.currPlayer = 2)
            : (state.currPlayer = 1)
        }
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
