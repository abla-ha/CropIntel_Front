import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import navbarSlice from './slices/navbarSlice'
import diseaseReducer from './slices/diseaseSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    nav: navbarSlice,
    disease: diseaseReducer,
  }
})
