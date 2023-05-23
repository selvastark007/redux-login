import { configureStore, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    username: '',
    error: ''
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload;
      state.error = '';
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.username = '';
      state.error = action.payload;
    },
    registerSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload;
      state.error = '';
    },
    registerFailure: (state, action) => {
      state.isLoggedIn = false;
      state.username = '';
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = '';
      state.error = '';
    }
  }
});

export const { loginSuccess, loginFailure, registerSuccess, registerFailure, logout } = authSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
});
