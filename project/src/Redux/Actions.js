import axios from 'axios'
//register
export const REQUEST = "REQUEST"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"
//loginLOGIN_
export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"


//register
export const request = () => {
    return {
        type: REQUEST
    }
}
export const success = (allUser) => {
    return {
        type: SUCCESS,
        payload: allUser,

    }
}
export const failure = (error) => {
    return {
        type: FAILURE,
        registerStatus: '',
        payload: error
    }
}
export const userGoingForRegister = (values) => {
    return (dispatch) => {
        dispatch(request)
        axios.post('https://node-demox.herokuapp.com/login/signin', values)
            .then(Response => {
                axios.get('https://node-demox.herokuapp.com/login/loginrecord/')
                    .then(Response => {
                        const allUser = Response.data
                        dispatch(success(allUser))
                    })
                    .catch(error => {
                        const errorMsg = error.message
                        dispatch(failure(errorMsg))
                    })
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(failure(errorMsg))
            })
    }
}



//login
export const loginrequest = () => {
    console.log("request");
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
    console.log("eror");
    return {
        type: LOGIN_FAILURE,
        registerStatus: '',
        payload: error
    }
}
export const userGoingForLogin = (values) => {
    return (dispatch) => {
        dispatch(loginrequest)
        axios.post('https://node-demox.herokuapp.com/login/login/', values)
            .then(Response => {
                const token = Response.data
                dispatch(loginsuccess(token))
                console.log(Response);
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(loginfailure(errorMsg))
                console.log(error);
            })
    }
}




