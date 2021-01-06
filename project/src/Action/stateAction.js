import axios from 'axios'
import { headerWithOutToken } from '../services/header'

//state
export const STATE_REQUEST = "STATE_REQUEST"
export const STATE_SUCCESS = "STATE_SUCCESS"
export const STATE_FAILURE = "STATE_FAILURE"

//state
export const stateRequest = () => {
    return {
        type: STATE_REQUEST
    }
}
export const stateSuccess = (state) => {
    return {
        type: STATE_SUCCESS,
        payload: state,
    }
}
export const stateFailure = (error) => {
    return {
        type: STATE_FAILURE,
        stateData: [],
        payload: error
    }
}
export const getAllstate = (countryId) => {

    return (dispatch) => {
        dispatch(stateRequest())
        axios.get(`${process.env.REACT_APP_API}/api/getStateById/${countryId}`,headerWithOutToken())
            .then((Response) => {
                const state = Response.data.stateList
                dispatch(stateSuccess(state))
            })
            .catch((error) => {
                const errors = error.message
                dispatch(stateFailure(errors))
            })
    }
}