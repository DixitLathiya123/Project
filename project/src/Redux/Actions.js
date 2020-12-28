import axios from 'axios'
import { toast } from 'react-toastify';

//register
export const REQUEST = "REQUEST"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"
//loginLOGIN_
export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
//country
export const COUNTRY_REQUEST = "COUNTRY_REQUEST"
export const COUNTRY_SUCCESS = "COUNTRY_SUCCESS"
export const COUNTRY_FAILURE = "COUNTRY_FAILURE"
//state
export const STATE_REQUEST = "STATE_REQUEST"
export const STATE_SUCCESS = "STATE_SUCCESS"
export const STATE_FAILURE = "STATE_FAILURE"
//message
export const MESSAGE_REQUEST = "MESSAGE_REQUEST"
export const MESSAGE_SUCCESS = "MESSAGE_SUCCESS"
export const MESSAGE_FAILURE = "MESSAGE_FAILURE"
//forgetPassword
export const PASSWORD_REQUEST = "PASSWORD_REQUEST"
export const PASSWORD_SUCCESS = "PASSWORD_SUCCESS"
export const PASSWORD_FAILURE = "PASSWORD_FAILURE"

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
    return (dispatch) => {
        dispatch(messageRequest())
        axios.post(`${process.env.REACT_APP_API}/api/contactUs`, message)
            .then((Response) => {
                const message = Response.data
                dispatch(messageSuccess(message))
                if (message.ResponseStatus == 0) {
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
        axios.get(`${process.env.REACT_APP_API}/api/getStateById/${countryId}`)
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

//country
export const countryRequest = () => {
    return {
        type: COUNTRY_REQUEST
    }
}
export const countrySuccess = (country) => {
    return {
        type: COUNTRY_SUCCESS,
        payload: country,

    }
}
export const countryFailure = (error) => {
    return {
        type: COUNTRY_FAILURE,
        CountryData: [],
        payload: error
    }
}
export const getAllCountry = () => {
    return (dispatch) => {
        dispatch(countryRequest())
        axios.get(`${process.env.REACT_APP_API}/api/getAllCountry`)
            .then((Response) => {
                const country = Response.data.countryList
                dispatch(countrySuccess(country))
            })
            .catch((error) => {
                const errors = error.message
                dispatch(countryFailure(errors))
            })
    }
}


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
        axios.post(`${process.env.REACT_APP_API}/api/signin`, values)
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
                    }, 1000);
                }
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(failure(errorMsg))
            })
    }
}


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
        axios.post(`${process.env.REACT_APP_API}/api/login`, values)
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
                        props.history.push("/dash")
                    }, 2000);
                }
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(loginfailure(errorMsg))
            })
    }
}





