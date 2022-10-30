import { createSlice } from '@reduxjs/toolkit'

export const userlogin = createSlice({
  name: 'filmes',
  initialState: {
    email: '',
    logado: false,
  },
  reducers: {
    loginUser: (state, action) => {
      console.log(action)
        state.email = action.payload.data.user.email
        if(action.payload.status === 200 && action.payload.data.token) {
          console.log('logado')
          state.logado = true
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginUser } = userlogin.actions

export default userlogin.reducer