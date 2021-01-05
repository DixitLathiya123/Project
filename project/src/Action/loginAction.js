import axios from 'axios'
import { toast } from 'react-toastify';
import { headerWithOutToken } from '../Services/header'

//login
export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

//login
export const loginrequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}
export const loginsuccess = (token) => {

    return {
        type: LOGIN_SUCCESS,
        payload: token,
    }
}
export const loginfailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        LoginStatus: '',
        payload: error,
        LoginToken: '',
    }
}
export const userGoingForLogin = (values, props) => {
    return (dispatch) => {
        dispatch(loginrequest)
        axios.post(`${process.env.REACT_APP_API}/api/login`, values, headerWithOutToken())
            .then(Response => {
                const token = Response.data
                dispatch(loginsuccess(token))
                if (token.ResponseStatus !== 0) {
                    localStorage.clear()
                    if (token.message !== '') {
                        toast.error(token.message)
                    }
                }
                else {
                    toast.success("Login Successfully!!")
                    setTimeout(() => {
                        props.history.push("/dashbord")
                    }, 2000);
                }
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(loginfailure(errorMsg))
            })
    }
}