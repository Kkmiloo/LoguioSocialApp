import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { auth } from '../../firebase/config/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { getUserInfo } from '../../firebase/functions/firebaseFirestore';

export const handleAuthStateChanged = createAsyncThunk(
  'auth/handleAuthStateChanged',
  async (_, thunkAPI) => {
    onAuthStateChanged(auth, async (item) => {
      if (item) {
        try {
          const user = await getUserInfo(item.uid);
          thunkAPI.dispatch(setUser(user));
        } catch (error) {
          // Handle error
          thunkAPI.dispatch(setError(error.message));
        }
      } else {
        thunkAPI.dispatch(clearUser());
      }
    });
  },
);

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    clearUser: (state) => {
      state.user = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, clearUser, setError } = userSlice.actions;
export default userSlice.reducer;
