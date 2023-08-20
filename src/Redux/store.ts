import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer';
import movieReducer from './movieReducer';
import movieDetails from './movieDetails';

export default configureStore({
  reducer: {
    counter:counterReducer,
    movie:movieReducer,
    movieDetails:movieDetails
  }
})