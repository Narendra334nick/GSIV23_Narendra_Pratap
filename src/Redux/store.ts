import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer';
import movieReducer from './movieReducer';
import movieDetails from './movieDetails';
import loaderReducer from './loaderReducer';

export default configureStore({
  reducer: {
    counter:counterReducer,
    movie:movieReducer,
    movieDetails:movieDetails,
    loader:loaderReducer
  }
})