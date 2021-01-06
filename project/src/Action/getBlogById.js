import axios from 'axios'
import { headerWithToken} from '../services/header'

//get blog by id
export const GET_BLOG_BY_ID_REQUEST = "GET_BLOG_BY_ID_REQUEST"
export const GET_BLOG_BY_ID_SUCCESS = "GET_BLOG_BY_ID_SUCCESS"
export const GET_BLOG_BY_ID_FAILURE = "GET_BLOG_BY_ID_FAILURE"

//get blog by id
export const getBlogByIdRequest = () => {
    return {
        type: GET_BLOG_BY_ID_REQUEST
    }
}
export const getBlogByIdSuccess = (blogById) => {
    return {
        type: GET_BLOG_BY_ID_SUCCESS,
        payload: blogById,
    }
}
export const getBlogByIdFailure = (error) => {
    return {
        type: GET_BLOG_BY_ID_FAILURE,
        ReturnCode: '',
        payload: error
    }
}
export const getBlogById = () => {
    return (dispatch) => {
        dispatch(getBlogByIdRequest())
        axios.get(`${process.env.REACT_APP_API}/api/getBlogById`, headerWithToken())
            .then((Response) => {
                const blogById = Response.data
                dispatch(getBlogByIdSuccess(blogById))
            })
            .catch((error) => {
                const errors = error.message
                dispatch(getBlogByIdFailure(errors))
            })

    }
}