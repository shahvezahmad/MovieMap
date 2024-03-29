// sets up redux store for the application
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { tmdbApi } from '../services/TMDB';
import  genreOrCategoryReducer  from '../features/currentGenreOrCategory';
import userReducer from '../features/auth';

//store for state management
const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

setupListeners(store.dispatch);
export default store;
