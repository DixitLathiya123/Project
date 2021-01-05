import axios from 'axios'
import { toast } from 'react-toastify';
import { headerWithToken} from '../Services/header'
import { getBlogById } from './getBlogById';

//delete blog 
export const DELETE_BLOG_REQUEST = "DELETE_BLOG_REQUEST"
export const DELETE_BLOG_SUCCESS = "DELETE_BLOG_SUCCESS"
export const DELETE_BLOG_FAILURE = "DELETE_BLOG_FAILURE"

//delete blog
export const deleteBlogRequest = () => {
    return {
        type: DELETE_BLOG_REQUEST
    }
}
export const deleteBlogSuccess = (data) => {
    return {
        type: DELETE_BLOG_SUCCESS,
        payload: data,
    }
}
export const deleteBlogFailure = (error) => {
    return {
        type: DELETE_BLOG_FAILURE,
        ReturnCode: '',
        payload: error
    }
}
export const deleteBlog = (deleteId) => {

    return (dispatch) => {
        dispatch(deleteBlogRequest())
        axios.delete(`${process.env.REACT_APP_API}/api/deleteBlog/${deleteId}`, headerWithToken())
            .then((Response) => {
                const deleteBlog = Response.data
                dispatch(deleteBlogSuccess(deleteBlog))
                if (deleteBlog.ResponseStatus === 0) {
                    if (deleteBlog.message !== "") {
                        toast.success(deleteBlog.message)
                        setTimeout(() => {
                            dispatch(getBlogById())
                        }, 2000);
                    }
                }
            })
            .catch((error) => {
                const errors = error.message
                dispatch(deleteBlogFailure(errors))
            })

    }
}