import {LOGIN} from '../actions/AuthAction'
    const initialState = {

    isLoginUser: false,
    user: {}
}

export function AuthReducer(state= initialState, actions) {
    switch (actions.type) {
        case LOGIN:{
         return {
             ...state,
             isLoginUser : true,
             user: actions.payload
         }
        }
    default:
        return state;
    }
}