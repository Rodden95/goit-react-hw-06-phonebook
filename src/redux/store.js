import { configureStore } from '@reduxjs/toolkit'
import phonebookReducer from './todosSlice'

export const store = configureStore({
  // reducer: {
  //   todos: todosReducer,
  // },
  reducer: {
    contacts: phonebookReducer
  }
})