import { createSlice } from '@reduxjs/toolkit'

export const navbarSlice = createSlice({
  name: 'counter',
  initialState: {
    navOn: false
  },
  reducers: {
    toggleNav: (state) => {
      state.navOn = !state.navOn;
    }
  }
})

// Action creators are generated for each case reducer function
export const { toggleNav } = navbarSlice.actions

export default navbarSlice.reducer