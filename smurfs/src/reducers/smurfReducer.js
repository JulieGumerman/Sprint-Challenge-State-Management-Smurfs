import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE } from "../actions";

const initialState = {
    smurfs: [], 
    isFetching: false, 
    error: ""
}

export const smurfReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_START: 
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case FETCH_SMURFS_SUCCESS: 
            console.log("smurfs from state", state);
            return {
                ...state, 
                smurfs: action.payload,       
                isFetching: false, 
 
            }
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}