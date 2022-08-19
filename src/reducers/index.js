import { combineReducers} from 'redux'

import ListaReducer from './lista-reducer'

const appReducer = combineReducers({
    lista: ListaReducer,
})

const rootReducer = (state, action) => {
    if(action.type == 'USER_LOGGED_OUT') {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer