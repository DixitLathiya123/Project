import axios from 'axios'
import { headerWithToken } from '../services/header'

//get user by id
export const GET_USER_BY_ID_REQUEST = "GET_USER_BY_ID_REQUEST"
export const GET_USER_BY_ID_SUCCESS = "GET_USER_BY_ID_SUCCESS"
export const GET_USER_BY_ID_FAILURE = "GET_USER_BY_ID_FAILURE"

//get user by id
export const getUserByIdRequest = () => {
    return {
        type: GET_USER_BY_ID_REQUEST
    }
}
export const getUserByIdSuccess = (UserById) => {
    return {
        type: GET_USER_BY_ID_SUCCESS,
        payload: UserById,
    }
}
export const getUserByIdFailure = (error) => {
    return {
        type: GET_USER_BY_ID_FAILURE,
        ReturnCode: '',
        payload: error
    }
}
export const getUserById = () => {
    return (dispatch) => {
        dispatch(getUserByIdRequest())
        axios.get(`${process.env.REACT_APP_API}/api/getUserById`, headerWithToken())
            .then((Response) => {
                const UserById = Response.data
                dispatch(getUserByIdSuccess(UserById))
            })
            .catch((error) => {
                const errors = error.message
                dispatch(getUserByIdFailure(errors))
            })
    }
}