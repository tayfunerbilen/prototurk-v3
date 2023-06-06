import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modals: []
}

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    _append: (state, action) => {
      const current = state.modals.find(modal => modal.name === action.payload.name)
      if (!current) {
        state.modals.push(action.payload)
      }
    },
    _destory: (state, action) => {
      if (action.payload?.name) {
        state.modals = state.modals.filter(modal => modal.name !== action.payload.name)
      } else {
        state.modals.pop()
      }
    },
    _destoryAll: state => {
      state.modals = []
    }
  }
})

export const { _append, _destory, _destoryAll } = modal.actions
export default modal.reducer
