import axios from 'axios'
import { toast } from 'react-toastify';
import {  headerWithOutToken } from '../services/header'

//forgetPassword
export const FORGET_REQUEST = "FORGET_REQUEST"
export const FORGET_SUCCESS = "FORGET_SUCCESS"
export const FORGET_FAILURE = "FORGET_FAILURE"

//forget
export const forgetRequest = () => {
    return {
        type: FORGET_REQUEST
    }
}
export const forgetSuccess = (email) => {
    return {
        type: FORGET_SUCCESS,
        payload: email,
    }
}
export const forgetFailure = (error) => {
    return {
        type: FORGET_FAILURE,
        ReturnCode: '',
        payload: error
    }
}
export const forgetPassword = (email) => {

    return (dispatch) => {
        dispatch(forgetRequest())
        axios.post(`${process.env.REACT_APP_API}/api/forgetPassword`, email, headerWithOutToken())
            .then((Response) => {
                const email = Response.data
                dispatch(forgetSuccess(email))
                if (email.ReturnCode === 1) {
                    if (email.message !== "") {
                        toast.success(email.message)
                    }
                }
            })
            .catch((error) => {
                const errors = error.message
                dispatch(forgetFailure(errors))
            })
    }
}