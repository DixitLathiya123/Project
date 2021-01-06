import axios from 'axios'
import { toast } from 'react-toastify';
import { headerWithToken } from '../services/header'

//get user by id
export const DISLIKE_REQUEST = "DISLIKE_REQUEST"
export const DISLIKE_SUCCESS = "DISLIKE_SUCCESS"
export const DISLIKE_FAILURE = "DISLIKE_FAILURE"

//get user by id
export const blogDisLikeRequest = () => {
    return {
        type: DISLIKE_REQUEST
    }
}
export const blogDisLikeSuccess = (like) => {
    return {
        type: DISLIKE_SUCCESS,
        payload: like,
    }
}
export const blogDisLikeFailure = (error) => {
    return {
        type: DISLIKE_FAILURE,
        ReturnCode: '',
        payload: error
    }
}
export const blogDisLike = (id,props) => {
    return (dispatch) => {
        dispatch(blogDisLikeRequest())
        axios.get(`${process.env.REACT_APP_API}/api/blogDisLike/${id}`, headerWithToken())
        .then((Response) => {
                const like = Response.data
                dispatch(blogDisLikeSuccess(like))
                if (like.ResponseStatus !== 0) {
                    if (like.message !== '') {
                        toast.error(like.message)
                    }
                }
                else {
                    toast.success(like.message) 
                    props.history.push("/singleBlog")
                }
            })
            .catch((error) => {
                const errors = error.message
                dispatch(blogDisLikeFailure(errors))
            })
    }
}