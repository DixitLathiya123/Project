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
export const FORGET_REQUEST = "FORGET_REQUEST"
export const FORGET_SUCCESS = "FORGET_SUCCESS"
export const FORGET_FAILURE = "FORGET_FAILURE"
//newPassword
export const FORGET_TO_NEWREQUEST = "FORGET_TO_NEWREQUEST"
export const FORGET_TO_NEWSUCCESS = "FORGET_TO_NEWSUCCESS"
export const FORGET_TO_NEWFAILURE = "FORGET_TO_NEWFAILURE"
//getAllBlog
export const GET_ALL_BLOG_REQUEST = "GET_ALL_BLOG_REQUEST"
export const GET_ALL_BLOG_SUCCESS = "GET_ALL_BLOG_SUCCESS"
export const GET_ALL_BLOG_FAILURE = "GET_ALL_BLOG_FAILURE"
//createBlog
export const CREATE_BLOG_REQUEST = "CREATE_BLOG_REQUEST"
export const CREATE_BLOG_SUCCESS = "CREATE_BLOG_SUCCESS"
export const CREATE_BLOG_FAILURE = "CREATE_BLOG_FAILURE"



//create blog
export const createBlogRequest = () => {
    return {
        type: CREATE_BLOG_REQUEST
    }
}
export const createBlogSuccess = (data) => {
    return {
        type: CREATE_BLOG_SUCCESS,
        payload: data,
    }
}
export const createBlogFailure = (error) => {
    return {
        type: CREATE_BLOG_FAILURE,
        ReturnCode: '',
        payload: error
    }
}
export const createBlog = (blog, onSubmitProps) => {
    let token = JSON.parse(localStorage.getItem('loginTokenFromApi'))
    console.log("token", token);
    return (dispatch) => {
        dispatch(createBlogRequest())
        axios.post(`${process.env.REACT_APP_API}/api/createBlog`, blog,
            {
                headers: {
                    'Authorization': token,
                    'content-type': "application/json"
                }
            })
            .then((Response) => {
                const blog = Response.data
                dispatch(createBlogSuccess(blog))
                if (blog.ResponseStatus === 0) {
                    if (blog.message !== "") {
                        toast.success(blog.message)
                        onSubmitProps.resetForm();
                    }
                }
            })
            .catch((error) => {
                const errors = error.message
                dispatch(createBlogFailure(errors))
            })

    }
}


//getAllBlog
export const getAllBlogRequest = () => {
    return {
        type: GET_ALL_BLOG_REQUEST
    }
}
export const getAllBlogSuccess = (data) => {
    return {
        type: GET_ALL_BLOG_SUCCESS,
        payload: data,
    }
}
export const getAllBlogFailure = (error) => {
    return {
        type: GET_ALL_BLOG_FAILURE,
        Blogs: '',
        payload: error
    }
}
export const getAllBlog = () => {
    return (dispatch) => {
        dispatch(getAllBlogRequest())
        axios.get(`${process.env.REACT_APP_API}/api/getAllBlog`)
            .then((Response) => {
                const blog = Response.data
                dispatch(getAllBlogSuccess(blog))
            })
            .catch((error) => {
                const errors = error.message
                dispatch(getAllBlogFailure(errors))
            })
    }
}

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
        axios.post(`${process.env.REACT_APP_API}/api/resetPassword`, data)
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
        axios.post(`${process.env.REACT_APP_API}/api/forgetPassword`, email)
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





