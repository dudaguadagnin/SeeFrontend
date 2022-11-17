import { createSlice } from '@reduxjs/toolkit'

export const userlogin = createSlice({
  name: 'filmes',
  initialState: {
    email: '',
    name: '',
    user_id: '',
    logado: false,
    token: ''
  },
  reducers: {
    loginUser: (state, action) => {
      console.log(action)
        state.email = action.payload.data.user.email
        state.name = action.payload.data.user.name
        state.user_id = action.payload.data.user.id
        if(action.payload.status === 200 && action.payload.data.token) {
          console.log('logado')
          state.logado = true
          state.token = action.payload.data.token
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginUser } = userlogin.actions

export default userlogin.reducer