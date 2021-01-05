import axios from 'axios'
import { toast } from 'react-toastify';
import { headerWithToken } from '../Services/header'

//update profile
export const UPDATE_PROFILE_REQUEST = "UPDATE_PROFILE_REQUEST"
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS"
export const UPDATE_PROFILE_FAILURE = "UPDATE_PROFILE_FAILURE"

//update profile
export const updateProfileRequest = () => {
    return {
        type: UPDATE_PROFILE_REQUEST
    }
}
export const updateProfileSuccess = (change) => {
    return {
        type: UPDATE_PROFILE_SUCCESS,
        payload: change,
    }
}
export const updateProfileFailure = (error) => {

    return {
        type: UPDATE_PROFILE_FAILURE,
        ResponseStatus: '',
        payload: error
    }
}
export const updateProfile = (data, onSubmitProps) => {
    return (dispatch) => {
        dispatch(updateProfileRequest())
        axios.post(`${process.env.REACT_APP_API}/api/updateProfile`, data, headerWithToken())
            .then((Response) => {
                const data = Response.data
                dispatch(updateProfileSuccess(data))
                onSubmitProps.resetForm();
                if (data.ResponseStatus !== 0) {
                    if (data.message !== "") {
                        toast.error(data.message)
                    }
                }
                else {
                    toast.success(data.message)
                }
            })
            .catch((error) => {
                const errors = error.message
                dispatch(updateProfileFailure(errors))
            })
    }
}