import { configureStore } from '@reduxjs/toolkit'
import { todoSlice } from '../features/TODO/TodoSlice'

export default configureStore({
  reducer: {
    todo : todoSlice.reducer
  }
})