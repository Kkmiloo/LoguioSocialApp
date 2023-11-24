import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';

const store = configureStore({
  reducer: { user: authSlice },
});
export default store;
