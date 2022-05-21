import React, {} from "react";
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from'react-redux';
import { todoSlice } from "./todoSlice";
import { createLogger } from 'redux-logger';

const logger = createLogger();


const rootReducer = combineReducers({
  todo: todoSlice.reducer
})

const initialState = {};

export const store = configureStore({ 
  reducer: rootReducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), 
  devTools: process.env.NODE_ENV !== 'production', 
  preloadedState: initialState, 
  enhancers: (defaultEnhancers) => [...defaultEnhancers] });

  export type RootState = ReturnType<typeof store.getState>; 
  export type AppDispatch = typeof store.dispatch; 
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 
  export const useAppDispatch = () => useDispatch<AppDispatch>();
