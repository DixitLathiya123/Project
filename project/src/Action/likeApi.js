import axios from 'axios'
import { toast } from 'react-toastify';
import { headerWithToken } from '../services/header'

//get user by id
export const LIKE_REQUEST = "LIKE_REQUEST"
export const LIKE_SUCCESS = "LIKE_SUCCESS"
export const LIKE_FAILURE = "LIKE_FAILURE"

//get user by id
export const blogLikeRequest = () => {
    return {
        type: LIKE_REQUEST
    }
}
export const blogLikeSuccess = (like) => {
    return {
        type: LIKE_SUCCESS,
        payload: like,
    }
}
export const blogLikeFailure = (error) => {
    return {
        type: LIKE_FAILURE,
        ReturnCode: '',
        payload: error
    }
}
export const blogLike = (id,props) => {
    return (dispatch) => {
        dispatch(blogLikeRequest())
        axios.get(`${process.env.REACT_APP_API}/api/blogLike/${id}`, headerWithToken())
        .then((Response) => {
                const like = Response.data
                dispatch(blogLikeSuccess(like))
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
                dispatch(blogLikeFailure(errors))
            })
    }
}