import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import numerosReducer from './reducers/numeros'

const reducers = combineReducers({
    numeros:numerosReducer
    // nomes: function (state, action) {
    //     console.log('Reducer de Nomes')
    //     console.log(state, '', action)
    //     return [
    //         'Ana',
    //         'Bia',
    //         'Carlos'
    //     ]
    // }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig