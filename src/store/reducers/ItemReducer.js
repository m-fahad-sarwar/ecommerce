import { Fetch_ITEMS } from "../actions/ItemAction";


const initialState = {
    data: []
}


export const ItemReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case Fetch_ITEMS:

            console.log("action.payload in reducer", actions.payload);
            return {
                ...state,
                data: actions.payload,
            };


        default:
            return state;
    }

}
