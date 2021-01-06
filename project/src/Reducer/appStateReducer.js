import {
    REQUEST,
    SUCCESS,
    FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    COUNTRY_REQUEST,
    COUNTRY_SUCCESS,
    COUNTRY_FAILURE,
    STATE_SUCCESS,
    STATE_REQUEST,
    STATE_FAILURE,
    MESSAGE_SUCCESS,
    MESSAGE_REQUEST,
    MESSAGE_FAILURE,
    FORGET_SUCCESS,
    FORGET_REQUEST,
    FORGET_FAILURE,
    FORGET_TO_NEWSUCCESS,
    FORGET_TO_NEWREQUEST,
    FORGET_TO_NEWFAILURE,
    CREATE_BLOG_SUCCESS,
    CREATE_BLOG_REQUEST,
    CREATE_BLOG_FAILURE,
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
    COMMENT_REQUEST,
    COMMENT_SUCCESS,
    COMMENT_FAILURE,
    LIKE_REQUEST,
    LIKE_SUCCESS,
    LIKE_FAILURE,
    DISLIKE_REQUEST,
    DISLIKE_SUCCESS,
    DISLIKE_FAILURE,
} from '../action/actionIndex'

import { initialState } from '../state/State'

//allStates
export const initialStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST: return { ...state, loading: true }
        case LOGIN_REQUEST: return { ...state, loading: true }
        case COUNTRY_REQUEST: return { ...state, loading: true }
        case STATE_REQUEST: return { ...state, loading: true }
        case MESSAGE_REQUEST: return { ...state, loading: true }
        case FORGET_REQUEST: return { ...state, loading: true }
        case FORGET_TO_NEWREQUEST: return { ...state, loading: true }
        case CREATE_BLOG_REQUEST: return { ...state, loading: true }
        case DELETE_BLOG_REQUEST: return { ...state, loading: true }
        case GET_USER_BY_ID_REQUEST: return { ...state, loading: true }
        case CHANGE_PASSWORD_REQUEST: return { ...state, loading: true }
        case UPDATE_PROFILE_REQUEST: return { ...state, loading: true }
        case COMMENT_REQUEST: return { ...state, loading: true }
        case LIKE_REQUEST: return { ...state, loading: true }
        case DISLIKE_REQUEST: return { ...state, loading: true }

        case LOGIN_SUCCESS:
            state.Login = {
                ...state.Login,
                LoginData: action.payload,
            }
            localStorage.setItem('loginTokenFromApi', JSON.stringify(action.payload !== undefined && action.payload.token !== false && action.payload.token))
            localStorage.setItem('loginData', JSON.stringify(action.payload !== undefined && action.payload.token !== false && action.payload))
            return state
        case SUCCESS:
            state = { ...state, loading: false, error: '', }
            state.Register = {
                ...state.Register,
                ResponseStatus: action.payload.ResponseStatus ? action.payload.ResponseStatus : '',
            }
            return state
        case COUNTRY_SUCCESS:
            state = { ...state, loading: false, error: '', }
            state.countries = {
                ...state.countries,
                CountryData: action.payload,
            }
            return state
        case STATE_SUCCESS:
            state = { ...state, loading: false, error: '', }
            state.states = {
                ...state.states,
                StateData: action.payload,
            }
            return state
        case MESSAGE_SUCCESS:
            state = { ...state, loading: false, error: '', }
            state.Messages = {
                ...state.Messages,
                ResponseStatus: action.payload,
            }
            return state
        case FORGET_SUCCESS:
            state = { ...state, loading: false, error: '', }
            state.Forget = {
                ...state.Forget,
                ReturnCode: '',
            }
            return state
        case FORGET_TO_NEWSUCCESS:
            state = { ...state, loading: false, error: '', }
            state.ForgetToNew = {
                ...state.ForgetToNew,
                ReturnCode: '',
            }
            return state
        case CREATE_BLOG_SUCCESS:
            state = { ...state, loading: false, error: '', }
            state.createBlog = {
                ...state.createBlog,
                ResponseStatus: action.payload,
            }
            return state
        case DELETE_BLOG_SUCCESS:
            state = { ...state, loading: false, error: '', }
            state.deleteBlog = {
                ...state.deleteBlog,
                ResponseStatus: action.payload,
            }
            return state
        case GET_USER_BY_ID_SUCCESS:
            state = { ...state, loading: false, error: '', }
            state.getUserById = {
                ...state.getUserById,
                blogById: action.payload,
            }
            return state
        case CHANGE_PASSWORD_SUCCESS:
            state = { ...state, loading: false, error: '', }
            state.ChangePassword = {
                ...state.ChangePassword,
                ReturnCode: action.payload,
            }
            return state
        case UPDATE_PROFILE_SUCCESS:
            state = { ...state, loading: false, error: '', }
            state.updateProfile = {
                ...state.updateProfile,
                ResponseStatus: action.payload,
            }
            return state
        case COMMENT_SUCCESS:
            state = { ...state, loading: false, error: '', }
            state.comments = {
                ...state.comments,
                ResponseStatus: action.payload,
            }
            return state
        case LIKE_SUCCESS:
            state = { ...state, loading: false, error: '', }
            state.Likes = {
                ...state.Likes,
                ResponseStatus: action.payload,
            }
            return state
        case DISLIKE_SUCCESS:
            state = { ...state, loading: false, error: '', }
            state.DisLikes = {
                ...state.DisLikes,
                ResponseStatus: action.payload,
            }
            return state
       
        case FAILURE: return { ...state, loading: false, LoginToken: '', error: action.payload }
        case LOGIN_FAILURE: return { ...state, loading: false, ResponseStatus: '', error: action.payload }
        case COUNTRY_FAILURE: return { ...state, loading: false, CountryData: [], error: action.payload }
        case STATE_FAILURE: return { ...state, loading: false, StateData: [], error: action.payload }
        case MESSAGE_FAILURE: return { ...state, loading: false, ResponseStatus: '', error: action.payload }
        case FORGET_FAILURE: return { ...state, loading: false, ReturnCode: '', error: action.payload }
        case FORGET_TO_NEWFAILURE: return { ...state, loading: false, ReturnCode: '', error: action.payload }
        case CREATE_BLOG_FAILURE: return { ...state, loading: false, ReturnCode: '', error: action.payload }
        case DELETE_BLOG_FAILURE: return { ...state, loading: false, ResponseStatus: '', error: action.payload }
        case GET_USER_BY_ID_FAILURE: return { ...state, loading: false, UserById: [], error: action.payload }
        case CHANGE_PASSWORD_FAILURE: return { ...state, loading: false, ReturnCode: '', error: action.payload }
        case UPDATE_PROFILE_FAILURE: return { ...state, loading: false, ResponseStatus: '', error: action.payload }
        case COMMENT_FAILURE: return { ...state, loading: false, ResponseStatus: '', error: action.payload }
        case LIKE_FAILURE: return { ...state, loading: false, ResponseStatus: '', error: action.payload }
        case DISLIKE_FAILURE: return { ...state, loading: false, ResponseStatus: '', error: action.payload }

        default: return state;
    }
}