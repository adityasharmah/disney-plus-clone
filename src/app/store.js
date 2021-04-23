import {configureStore } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';

export default configureStore({
  reducer:{
    user:userReducer
  },
  middleware:getDefaultMiddleware({
    serializableCheck:false,
  }),
}) 