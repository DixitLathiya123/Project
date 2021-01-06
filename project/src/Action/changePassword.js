import axios from 'axios'
import { toast } from 'react-toastify';
import { headerWithToken } from '../services/header'

//change password
export const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST"
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS"
export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE"

//change password
export const changePasswordRequest = () => {
    return {
        type: CHANGE_PASSWORD_REQUEST
    }
}
export const changePasswordSuccess = (change) => {
    return {
        type: CHANGE_PASSWORD_SUCCESS,
        payload: change,
    }
}
export const changePasswordFailure = (error) => {
    return {
        type: CHANGE_PASSWORD_FAILURE,
        ReturnCode: '',
        payload: error
    }
}
export const changePassword = (change, onSubmitProps) => {

    return (dispatch) => {
        dispatch(changePasswordRequest())
        axios.put(`${process.env.REACT_APP_API}/api/changePassword`, change, headerWithToken())
            .then((Response) => {
                const change = Response.data
                dispatch(changePasswordSuccess(change))
                onSubmitProps.resetForm();
                if (change.ReturnCode !== 0) {
                    if (change.message !== "") {
                        toast.error(change.message)
                    }
                }
                else {
                    toast.success(change.message)
                }
            })
            .catch((error) => {
                const errors = error.message
                dispatch(changePasswordFailure(errors))
            })
    }
}