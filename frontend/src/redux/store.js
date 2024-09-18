import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice.js';
import SidebarSlice from './SidebarSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: SidebarSlice,
  },
});

export default store;
