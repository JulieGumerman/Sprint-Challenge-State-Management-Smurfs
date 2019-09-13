import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
export const ADD_TO_SMURFS = "ADD_TO_SMURFS";

export const addMoreSmurfs = creds => dispatch => {
    console.log("creds", creds);
    dispatch({ type: ADD_TO_SMURFS});
    axios.post(`http://localhost:3333/smurfs`, creds)
        .then(response => {
            console.log("post request", response);
            dispatch({ type: ADD_TO_SMURFS, payload: response.data.smurfs})
        })
        .catch(error => console.log("post error", error))
}

export const getSmurfs = ( )=> dispatch => {
    dispatch({ type: FETCH_SMURFS_START});
    axios.get(`http://localhost:3333/smurfs`)
        .then(response => {
            console.log(response);
            dispatch({type: FETCH_SMURFS_SUCCESS, payload: response.data})
            console.log("response.data", response.data)
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_SMURFS_FAILURE, payload: `${err}`})
        })
}