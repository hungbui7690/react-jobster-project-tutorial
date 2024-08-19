import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  user: null,
}

// 1. userSlice -> name: 'user' -> go to Register.jsx
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    console.log(`Register User : ${user}`)
  }
)
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    console.log(`Login User : ${user}`)
  }
)

const userSlice = createSlice({
  name: 'user', // # <user>/registerUser -> <user>/loginUser
  initialState,
})

export default userSlice.reducer
