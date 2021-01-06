import axios from 'axios'
import { toast } from 'react-toastify';
import { headerForFormData} from '../services/header'

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
    return (dispatch) => {
        dispatch(createBlogRequest())
        axios.post(`${process.env.REACT_APP_API}/api/createBlog`, blog, headerForFormData())
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