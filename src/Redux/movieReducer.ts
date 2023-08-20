import { createSlice , PayloadAction } from '@reduxjs/toolkit';
import { ArrayType } from '../Container/Core/Types/types'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    data: [],
  },
  reducers: {
    // increment: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: state => {
    //   state.value -= 1
    // },
    setData: (state:ArrayType, action: PayloadAction<ArrayType>) => {
      state.data = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setData } = counterSlice.actions

export default counterSlice.reducer