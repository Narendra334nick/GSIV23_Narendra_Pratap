import { createSlice , PayloadAction } from '@reduxjs/toolkit';
import { AnyObjectType } from '../Container/Core/Types/types'

export const counterSlice = createSlice({
  name: 'movieDetails',
  initialState: {
    data: {},
  },
  reducers: {
    
    setMovieDetails: (state:AnyObjectType, action: PayloadAction<AnyObjectType>) => {
      state.data = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setMovieDetails } = counterSlice.actions

export default counterSlice.reducer