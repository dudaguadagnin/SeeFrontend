import { configureStore } from '@reduxjs/toolkit'
import filmesReducer from './midias.js'

export default configureStore({
  reducer: {
    midia: filmesReducer,
  },
})