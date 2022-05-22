import { ADD_CART, DELETE_CART, FETCH_CART } from "../actions/CartAction"
const initialState = {
    data: []

}
export const CartReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case ADD_CART:
            let newTask = [...state.data, actions.payload]
            console.log(state);
            return {
                ...state,
                data: newTask,
            };

        case FETCH_CART:

            console.log("action.payload in reducer", actions.payload);
            return {
                ...state,
                data: actions.payload
            };
            case DELETE_CART: {
                let newTask = state.data.filter((data) => data.uid !== actions.payload)
                return {
                    ...state,
                    data: newTask,
                };
            }

        default:
            return state;
    }
}
