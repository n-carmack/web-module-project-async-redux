import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions/actions";


const initialState = {
    joke:[],
    loading: false,
    error:""
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                loading:true,
                error:initialState.error
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading:false,
                joke: action.payload,
                error:initialState.error
            }
        case FETCH_ERROR:
            return {
                ...state,
                loading:false,
                error: action.payload
            }

        default:
            return(state);
    }
}

export default reducer;