
import { createSlice } from '@reduxjs/toolkit'


export const phonebookReducer = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { name: 'denis1', phone: '124-123-123', id: 'qwe1' },
      { name: 'denis2', phone: '125-123-123', id: 'qwe2' },
      { name: 'denis3', phone: '126-123-123', id: 'qwe3' },
      
    ],
    filter:''
  },
  reducers: {
    addPhone: (state, { payload }) => {
      state.items.push(payload)
    },

    deletePhone: (state, { payload }) => ({
      items: state.items.filter(({ id }) =>
        id !== payload),
      filter: state.filter
    }),

    setFilter: (state, { payload }) =>
      {state.filter = payload},
    
    filterPhonebook: (state, { payload }) => ({
      items: state.items.filter(({ name }) =>
        name.toLowerCase().includes(payload)),
      filter: payload
    })
      
  },
})

export const { addPhone, deletePhone, setFilter, filterPhonebook } = phonebookReducer.actions

export default phonebookReducer.reducer