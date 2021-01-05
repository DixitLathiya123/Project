import {
    GET_ALL_BLOG_SUCCESS,
    GET_ALL_BLOG_REQUEST,
    GET_ALL_BLOG_FAILURE,
} from '../Action/actionIndex'
import { getAllBlog } from '../State/State'

//getAllBlog
export const getAllBlogReducer = (state = getAllBlog, action) => {
    switch (action.type) {
        case GET_ALL_BLOG_REQUEST: return {
            ...state,
            loading: true
        }
        case GET_ALL_BLOG_SUCCESS: return {
            ...state,
            loading: false,
            Blogs: action.payload,
            error: ''
        }
        case GET_ALL_BLOG_FAILURE: return {
            ...state,
            loading: false,
            Blogs: [],
            error: action.payload
        }
        default:
            return state;
    }
}