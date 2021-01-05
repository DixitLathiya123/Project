import axios from 'axios'
import { toast } from 'react-toastify';
import {  headerWithOutToken } from '../Services/header'

//newPassword
export const FORGET_TO_NEWREQUEST = "FORGET_TO_NEWREQUEST"
export const FORGET_TO_NEWSUCCESS = "FORGET_TO_NEWSUCCESS"
export const FORGET_TO_NEWFAILURE = "FORGET_TO_NEWFAILURE"

//forget
export const forgetToNewRequest = () => {
    return {
        type: FORGET_TO_NEWREQUEST
    }
}
export const forgetToNewSuccess = (data) => {
    return {
        type: FORGET_TO_NEWSUCCESS,
        payload: data,
    }
}
export const forgetToNewFailure = (error) => {
    return {
        type: FORGET_TO_NEWFAILURE,
        ReturnCode: '',
        payload: error
    }
}
export const forgetToNewPassword = (data) => {

    return (dispatch) => {
        dispatch(forgetToNewRequest())
        axios.post(`${process.env.REACT_APP_API}/api/resetPassword`, data,headerWithOutToken())
            .then((Response) => {
                const data = Response.data
                dispatch(forgetToNewSuccess(data))
                if (data.ReturnCode === 1) {
                    if (data.message !== "") {
                        toast.success(data.message)
                    }
                }
            })
            .catch((error) => {
                const errors = error.message
                dispatch(forgetToNewFailure(errors))
            })
    }
}