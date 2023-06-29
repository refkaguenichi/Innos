import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Replace with your API base URL

// Async thunk for login
export const loginUser = createAsyncThunk('/login', async (credentials) => {
  const response = await axios.post(`${API_BASE_URL}/api/auth/login`, credentials);
  return response.data;
});

// Async thunk for register
export const registerUser = createAsyncThunk('/register', async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/api/auth/register`, userData);
  return response.data;
});

// Async thunk for logout
export const logoutUser = createAsyncThunk('/logout', async () => {
  // Perform any necessary API requests or cleanup actions for logout

  // Simulating a logout request with setTimeout for demonstration purposes
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
});

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: !!localStorage.getItem('token'), // Check if token exists in local storage
    token: localStorage.getItem('token'),
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.token;
        // Store token in local storage
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(registerUser.pending, (state) => {
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.token;
        // Store token in local storage
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logoutUser.pending, (state) => {
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.token = null;
        // Remove token from localstorage
        localStorage.removeItem('token');
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const { actions: authActions } = authSlice;
export default authSlice.reducer;
