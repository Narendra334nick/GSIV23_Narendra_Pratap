import { createSlice , PayloadAction } from '@reduxjs/toolkit';
import { AnyObjectType } from '../Container/Core/Types/types'

export const counterSlice = createSlice({
  name: 'loader',
  initialState: {
    value : false,
  },
  reducers: {
    
    setLoader: (state:AnyObjectType, action: PayloadAction<boolean>) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setLoader } = counterSlice.actions

export default counterSlice.reducer