/*
  HTTP Methods
  - GET       -> get resources from the server
  - POST      -> submit resource to the server
  - PUT/PATCH -> modify resource on the server
  - DELETE    -> delete resource form the server

      axios.get(url, options);
      axios.post(url, resource, options);
      axios.patch(url, resource, options);
      axios.delete(url, options);

  ~~ npm install axios


*******************************

  - BaseURL = https://redux-toolkit-jobster-api-server.onrender.com/api/v1


*******************************

  Register Route 
  -> POST /auth/register
  -> POST /auth/testingRegister
    # {name:'john',  email:'john@gmail.com', password:'secret'}
    # sends back the user object with token

  -> POST /auth/login
    # {email:'john@gmail.com',password:'secret'}
    # sends back the user object with token

  -> PATCH /auth/updateUser
    # { email:'john@gmail.com', name:'john', lastName:'smith', location:'my location' }
    # sends back the user object with token


*******************************

  Custom Axios Instance
  1. utils/axios.js


*******************************

  2. userSlice.js


*/

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/axios'
import { toast } from 'react-toastify'

const initialState = {
  isLoading: false,
  user: null,
}

// 1. TEST URL
// export const registerUser = createAsyncThunk(
//   'user/registerUser',
//   async (user, thunkAPI) => {
//     try {
//       const resp = await customFetch.post('/auth/testingRegister', user)
//       console.log(resp)
//     } catch (error) {
//       console.log(error.response)
//     }
//   }
// )

// 2. REAL URL
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/register', user)
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

// 3.
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/login', user)
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,

  // 3.
  extraReducers: (builder) => {
    builder
      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload
        state.isLoading = false
        state.user = user
        toast.success(`Hello There ${user.name}`)
      })

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload
        state.isLoading = false
        state.user = user
        toast.success(`Welcome Back ${user.name}`)
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
  },
})

export default userSlice.reducer
