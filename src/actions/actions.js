export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCH_JOKES = "FETCH_JOKES";

import axios from "axios";

export const fetchJokes = () => {
    return(dispatch => {
        dispatch({type:FETCH_START});
        axios.get(`https://official-joke-api.appspot.com/random_joke`)
            .then(res=>{
                dispatch({type:FETCH_SUCCESS, payload: res.data});
      })
    });
}

export const fetchStart = () => {
    return({type:FETCH_START});
}

export const fetchSuccess = (joke) => {
    return({type:FETCH_SUCCESS, payload: joke});
}

export const fetchError = () => {
    return({type:FETCH_ERROR});
}