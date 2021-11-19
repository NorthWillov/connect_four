import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface BoxState {
  gameGridArr: [number[]] | []
}

const initialState: BoxState = {
  gameGridArr: [],
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
        state.gameGridArr[y][x] = 1
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
