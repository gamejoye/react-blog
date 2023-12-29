import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { apiSlice } from '../features/apiSlice';
import blogCommentsReducer from '../features/blog-comments/blogCommentsSlice';

export const allReducers = combineReducers({
  blogComments: blogCommentsReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const store = configureStore({
  reducer: allReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: {},
});
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
