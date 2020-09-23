import { combineReducers } from 'redux'

const user = (state = [], action) => {
    switch(action.type) {
        case 'SET_USER':
            console.log( action.type)
            console.log( action.value)
            const newState = [...state, action.value]
            console.log(newState)
            return newState
        default: return state
}}

const listings = (state = [], action) => {
    switch(action.type) {
        case 'ADD_LISTING':
            console.log(action.value)
            console.log([ ...state, action.value ])
            return [ ...state, action.value ]
            
        case 'REMOVE_LISTING':
            const newState = [ ...state ]
                newState.splice(action.value, 1);
                return newState;
        default: return state
    }
}

export default combineReducers({ user, listings })

