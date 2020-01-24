import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, REMOVE_BEER} from "../actions";

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
        case REMOVE_BEER:
            return {
                ...state,
                beers: state.beers.filter(beer => beer.id !== action.payload)
            };
        default:
            return state;
    }
}

// export default reducer;