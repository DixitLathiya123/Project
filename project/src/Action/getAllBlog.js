import axios from 'axios'
import { headerWithOutToken } from '../Services/header'

//getAllBlog
export const GET_ALL_BLOG_REQUEST = "GET_ALL_BLOG_REQUEST"
export const GET_ALL_BLOG_SUCCESS = "GET_ALL_BLOG_SUCCESS"
export const GET_ALL_BLOG_FAILURE = "GET_ALL_BLOG_FAILURE"

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
        axios.get(`${process.env.REACT_APP_API}/api/getAllBlog`,headerWithOutToken())
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