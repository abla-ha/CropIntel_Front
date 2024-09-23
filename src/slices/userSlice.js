import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: window.localStorage.getItem('ci-user-token'),
  reducers: {
    login: (state, action) => {
        window.localStorage.setItem('ci-user-token', action.payload);
        state = action.payload;
    },
    logout: (state) => {
        window.localStorage.removeItem('ci-user-token');
        state = null;
    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer