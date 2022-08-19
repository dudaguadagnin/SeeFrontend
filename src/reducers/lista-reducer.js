import {listaAction} from '../actions'
const initState = [{id:1, nome: 'arroz'}, {id:2, nome: 'feijão'}]

const ListaReducer = (state = initState, action) => {
    switch(action.type) {
        case action.ADD:
            return[...state, ...action.payload];
        case action.DELETE:
            return state.filter(item => item.id !=action.id);
        default:
            return state;   
        }
}
export default ListaReducer