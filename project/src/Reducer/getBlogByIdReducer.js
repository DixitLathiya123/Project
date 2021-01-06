import {
    GET_BLOG_BY_ID_REQUEST,
    GET_BLOG_BY_ID_SUCCESS,
    GET_BLOG_BY_ID_FAILURE,
} from '../action/actionIndex'
import { getBlogById } from '../state/State'

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