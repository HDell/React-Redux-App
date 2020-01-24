import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE} from "../actions";

const initialState = {
    isLoading: false,
    beers: null,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                error: '',
                isLoading: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                beers: action.payload,
                isLoading: false
            };
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
}

// export default reducer;