import { FETCH_SMURFS_START, 
    FETCH_SMURFS_SUCCESS, 
    FETCH_SMURFS_FAILURE, 
    ADD_TO_SMURFS_START,
    ADD_TO_SMURFS_SUCCESS,
    ADD_TO_SMURFS_FAILURE
 } from "../actions";

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
        case ADD_TO_SMURFS_START:
            return {
                ...state,
                isFetching: true,
                error:""
            }
        case ADD_TO_SMURFS_SUCCESS: 
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                isFetching: false,
                error:""
            }
        default:
            return state;
    }
}