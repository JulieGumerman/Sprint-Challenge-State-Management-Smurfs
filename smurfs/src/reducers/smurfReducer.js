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
        default:
            return state;
    }
}