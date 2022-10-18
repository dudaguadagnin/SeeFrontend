import { configureStore } from '@reduxjs/toolkit'
import filmesReducer from './midias.js'
import UserLogin from './userLogin.js'

export default configureStore({
  reducer: {
    midia: filmesReducer,
    login: UserLogin
  },
})