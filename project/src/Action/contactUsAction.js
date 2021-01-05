import axios from 'axios'
import { toast } from 'react-toastify';
import { headerWithOutToken } from '../Services/header'

//message
export const MESSAGE_REQUEST = "MESSAGE_REQUEST"
export const MESSAGE_SUCCESS = "MESSAGE_SUCCESS"
export const MESSAGE_FAILURE = "MESSAGE_FAILURE"

//message
export const messageRequest = () => {
    return {
        type: MESSAGE_REQUEST
    }
}
export const messageSuccess = (message) => {
    return {
        type: MESSAGE_SUCCESS,
        payload: message,
    }
}
export const messageFailure = (error) => {
    return {
        type: MESSAGE_FAILURE,
        ResponseStatus: '',
        payload: error
    }
}
export const userSendContact = (message) => {
    ("message");

    return (dispatch) => {
        dispatch(messageRequest())
        axios.post(`${process.env.REACT_APP_API}/api/contactUs`, message, headerWithOutToken())
            .then((Response) => {
                const message = Response.data
                dispatch(messageSuccess(message))
                if (message.ResponseStatus === 0) {
                    if (message.message !== "") {
                        toast.success(message.message)
                    }
                }
            })
            .catch((error) => {
                const errors = error.message
                dispatch(messageFailure(errors))
            })
    }
}
