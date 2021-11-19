import { createSlice } from "@reduxjs/toolkit"

interface BoxState {
  isClicked: boolean
}

const initialState: BoxState = {
  isClicked: false,
}

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    handleBoxClick: (state) => {
      state.isClicked = true
    },
  },
})

export const { handleBoxClick } = rootSlice.actions

export default rootSlice.reducer
