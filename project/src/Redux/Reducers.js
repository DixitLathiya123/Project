import {
    REQUEST,
    SUCCESS,
    FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    COUNTRY_FAILURE,
    COUNTRY_REQUEST,
    COUNTRY_SUCCESS,
    STATE_FAILURE,
    STATE_SUCCESS,
    STATE_REQUEST,
    MESSAGE_FAILURE,
    MESSAGE_SUCCESS,
    MESSAGE_REQUEST,
    FORGET_FAILURE,
    FORGET_SUCCESS,
    FORGET_REQUEST,
    FORGET_TO_NEWFAILURE,
    FORGET_TO_NEWSUCCESS,
    FORGET_TO_NEWREQUEST,
    GET_ALL_BLOG_FAILURE,
    GET_ALL_BLOG_SUCCESS,
    GET_ALL_BLOG_REQUEST,
    CREATE_BLOG_FAILURE,
    CREATE_BLOG_SUCCESS,
    CREATE_BLOG_REQUEST,
    GET_BLOG_BY_ID_REQUEST,
    GET_BLOG_BY_ID_SUCCESS,
    GET_BLOG_BY_ID_FAILURE,
    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_FAILURE,
    GET_USER_BY_ID_REQUEST,
    GET_USER_BY_ID_SUCCESS,
    GET_USER_BY_ID_FAILURE,
    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAILURE,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE,
} from './Actions'
import {
    Register, Login, Country, States, Message, Forget, ForgetToNew ,getAllBlog,createBlog,getBlogById,deleteBlog,getUserById,ChangePassword,updateProfile
} from './State'

//update profile
export const updateProfileReducer = (state = updateProfile, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST: return {
            ...state,
            loading: true
        }

        case UPDATE_PROFILE_SUCCESS: return {

            ...state,
            loading: false,
            ResponseStatus: action.payload,
            error: ''
        }

        case UPDATE_PROFILE_FAILURE: return {
            ...state,
            loading: false,
            ResponseStatus: '',
            error: action.payload
        }
        default:
            return state;
    }
}

//change password
export const changePasswordReducer = (state = ChangePassword, action) => {
    switch (action.type) {
        case CHANGE_PASSWORD_REQUEST: return {
            ...state,
            loading: true
        }

        case CHANGE_PASSWORD_SUCCESS: return {

            ...state,
            loading: false,
            ReturnCode: action.payload,
            error: ''
        }

        case CHANGE_PASSWORD_FAILURE: return {
            ...state,
            loading: false,
            ReturnCode: '',
            error: action.payload
        }
        default:
            return state;
    }
}


//get User by id
export const getUserByIdReducer = (state = getUserById, action) => {
    switch (action.type) {
        case GET_USER_BY_ID_REQUEST: return {
            ...state,
            loading: true
        }

        case GET_USER_BY_ID_SUCCESS: return {

            ...state,
            loading: false,
            blogById: action.payload,
            error: ''
        }

        case GET_USER_BY_ID_FAILURE: return {
            ...state,
            loading: false,
            UserById: [],
            error: action.payload
        }
        default:
            return state;
    }
}

//delete blog 
export const deleteBlogReducer = (state = deleteBlog, action) => {
    switch (action.type) {
        case DELETE_BLOG_REQUEST: return {
            ...state,
            loading: true
        }

        case DELETE_BLOG_SUCCESS: return {

            ...state,
            loading: false,
            ResponseStatus: action.payload,
            error: ''
        }

        case DELETE_BLOG_FAILURE: return {
            ...state,
            loading: false,
            ResponseStatus: '',
            error: action.payload
        }
        default:
            return state;
    }
}

//get blog by id
export const getBlogByIdReducer = (state = getBlogById, action) => {
    switch (action.type) {
        case GET_BLOG_BY_ID_REQUEST: return {
            ...state,
            loading: true
        }

        case GET_BLOG_BY_ID_SUCCESS: return {

            ...state,
            loading: false,
            blogById: action.payload,
            error: ''
        }

        case GET_BLOG_BY_ID_FAILURE: return {
            ...state,
            loading: false,
            blogById: [],
            error: action.payload
        }
        default:
            return state;
    }
}

//create blog
export const CreateBlogReducer = (state = createBlog, action) => {
    switch (action.type) {
        case CREATE_BLOG_FAILURE: return {
            ...state,
            loading: true
        }

        case CREATE_BLOG_SUCCESS: return {

            ...state,
            loading: false,
            ResponseStatus: action.payload,
            error: ''
        }

        case CREATE_BLOG_REQUEST: return {
            ...state,
            loading: false,
            ResponseStatus: '',
            error: action.payload
        }
        default:
            return state;
    }
}

//getAllBlog
export const getAllBlogReducer = (state = getAllBlog, action) => {
    switch (action.type) {
        case GET_ALL_BLOG_FAILURE: return {
            ...state,
            loading: true
        }

        case GET_ALL_BLOG_SUCCESS: return {

            ...state,
            loading: false,
            Blogs: action.payload,
            error: ''
        }

        case GET_ALL_BLOG_REQUEST: return {
            ...state,
            loading: false,
            Blogs: [],
            error: action.payload
        }
        default:
            return state;
    }
}


//forgetToNEW
export const ForgetToNewReducer = (state = ForgetToNew, action) => {
    switch (action.type) {
        case FORGET_TO_NEWREQUEST: return {
            ...state,
            loading: true
        }

        case FORGET_TO_NEWSUCCESS: return {

            ...state,
            loading: false,
            ReturnCode: action.payload,
            error: ''
        }

        case FORGET_TO_NEWFAILURE: return {
            ...state,
            loading: false,
            ReturnCode: '',
            error: action.payload
        }
        default:
            return state;
    }
}

//forget
export const ForgetReducer = (state = Forget, action) => {
    switch (action.type) {
        case FORGET_REQUEST: return {
            ...state,
            loading: true
        }

        case FORGET_SUCCESS: return {

            ...state,
            loading: false,
            ReturnCode: action.payload,
            error: ''
        }

        case FORGET_FAILURE: return {
            ...state,
            loading: false,
            ReturnCode: '',
            error: action.payload
        }
        default:
            return state;
    }
}

//message
export const MessageReducer = (state = Message, action) => {
    switch (action.type) {
        case MESSAGE_FAILURE: return {
            ...state,
            loading: true
        }

        case MESSAGE_SUCCESS: return {

            ...state,
            loading: false,
            ResponseStatus: action.payload,
            error: ''
        }

        case MESSAGE_REQUEST: return {
            ...state,
            loading: false,
            ResponseStatus: '',
            error: action.payload
        }
        default:
            return state;
    }
}

//State
export const StateReducer = (state = States, action) => {
    switch (action.type) {
        case STATE_FAILURE: return {
            ...state,
            loading: true
        }

        case STATE_SUCCESS: return {

            ...state,
            loading: false,
            StateData: action.payload,
            error: ''
        }

        case STATE_REQUEST: return {
            ...state,
            loading: false,
            StateData: [],
            error: action.payload
        }
        default:
            return state;
    }
}


//Country
export const CountryReducer = (state = Country, action) => {
    switch (action.type) {
        case COUNTRY_REQUEST: return {
            ...state,
            loading: true
        }

        case COUNTRY_SUCCESS: return {

            ...state,
            loading: false,
            CountryData: action.payload,
            error: ''
        }

        case COUNTRY_FAILURE: return {
            ...state,
            loading: false,
            CountryData: [],
            error: action.payload
        }
        default:
            return state;
    }
}

//register
export const reducer = (state = Register, action) => {
    switch (action.type) {
        case REQUEST: return {
            ...state,
            loading: true
        }

        case SUCCESS: return {
            ...state,
            loading: false,
            ResponseStatus: action.payload.ResponseStatus ? action.payload.ResponseStatus : '',
            message: action.payload.message
        }

        case FAILURE: return {
            ...state,
            loading: false,
            ResponseStatus: '',
            message: '',
            error: action.payload
        }

        default:
            return state;
    }
}

//login
export const loginReducer = (state = Login, action) => {
    switch (action.type) {
        case LOGIN_REQUEST: return {
            ...state,
            loading: true
        }

        case LOGIN_SUCCESS:
            state = {
                ...state,
                loading: false,
                LoginToken: action.payload,
            }
            localStorage.setItem('loginTokenFromApi', JSON.stringify(action.payload !== undefined && action.payload.token !== false && action.payload.token))

            return state

        case LOGIN_FAILURE: return {
            ...state,
            loading: false,
            LoginToken: '',
            error: action.payload
        }

        default:
            return state;
    }
}