import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../utils/Axios';
import { authpoints } from '../utils/Apis';
const { login, signup, logout,status } = authpoints;

// Async thunk for signup

export const signupUser = createAsyncThunk('auth/signupUser', async (signupData, { rejectWithValue }) => {
  try {
    const response = await api.post(signup, signupData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Async thunk for login
export const loginUser = createAsyncThunk('auth/loginUser', async (loginData, { rejectWithValue }) => {
  try {
    const response = await api.post(login, loginData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Async thunk for logout
export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { rejectWithValue }) => {
  try {
    console.log('logout');
    await api.post(logout);
    return;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const checkAuthStatus = createAsyncThunk('auth/checkAuthStatus', async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(status);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    id: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Signup Reducers
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Login Reducers
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.id = action.payload.id;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Logout Reducers
    builder
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.id = null;
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Check Auth Status Reducers
    builder
      .addCase(checkAuthStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.id =(action?.payload?.success)? action.payload?.user?.id : null ;
        state.isAuthenticated = (action?.payload?.success)? true : false;
        console.log("auth xn",action?.payload?.success)
      })
      .addCase(checkAuthStatus.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.id = null;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
