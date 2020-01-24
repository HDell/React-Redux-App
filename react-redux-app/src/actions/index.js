import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const REMOVE_BEER = 'REMOVE_BEER';

export const getBeers = () => dispatch => {
    dispatch({type: FETCH_START});
    axios.get('https://api.punkapi.com/v2/beers')
        .then((res) => {
            console.log(res);
            dispatch({type: FETCH_SUCCESS, payload: res.data});
        })
        .catch((err) => {
            dispatch({type: FETCH_FAILURE, payload: `${err.response.status} ${err.response.data}`});
        })
};

export const removeBeer = (beerID) => {
    return { type: REMOVE_BEER, payload: beerID };
};
