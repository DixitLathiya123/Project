import axios from 'axios'
import { toast } from 'react-toastify';
import { headerWithOutToken } from '../Services/header'

//register
export const REQUEST = "REQUEST"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"
//register
export const request = () => {
    return {
        type: REQUEST
    }
}
export const success = (data) => {
    return {
        type: SUCCESS,
        payload: data,
    }
}
export const failure = (error) => {
    return {
        type: FAILURE,
        registerStatus: '',
        payload: error
    }
}
export const userGoingForRegister = (values, props) => {

    return (dispatch) => {
        dispatch(request)
        axios.post(`${process.env.REACT_APP_API}/api/signin`, values, headerWithOutToken())
            .then(Response => {
                const data = Response.data
                dispatch(success(data))
                if (data.ResponseStatus !== 0) {
                    if (data.message !== '') {
                        toast.error(data.message)
                    }
                }
                else {
                    toast.success("Register Successfully!!")
                    setTimeout(() => {
                        props.history.push("/login")
                    }, 2000);
                }
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(failure(errorMsg))
            })
    }
}