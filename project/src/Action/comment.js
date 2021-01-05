import axios from 'axios'
import { toast } from 'react-toastify';
import { headerWithToken } from '../Services/header'

export const COMMENT_REQUEST = "COMMENT_REQUEST"
export const COMMENT_SUCCESS = "COMMENT_SUCCESS"
export const COMMENT_FAILURE = "COMMENT_FAILURE"

//comment
export const commentRequest = () => {
    return {
        type: COMMENT_REQUEST
    }
}
export const commentSuccess = (comment) => {
    return {
        type: COMMENT_SUCCESS,
        payload: comment,
    }
}
export const commentFailure = (error) => {

    return {
        type: COMMENT_FAILURE,
        ResponseStatus: '',
        payload: error
    }
}
export const comment = (comment,blogId, onSubmitProps) => {
    return (dispatch) => {
        dispatch(commentRequest())
        axios.post(`${process.env.REACT_APP_API}/api/blog-commit/${blogId}`, comment, headerWithToken())
            .then((Response) => {
                const comment = Response.data
                dispatch(commentSuccess(comment))
                onSubmitProps.resetForm();
                if (comment.ResponseStatus !== 0) {
                    if (comment.message !== "") {
                        toast.error(comment.message)
                    }
                }
                else {
                    toast.success(comment.message)
                }
            })
            .catch((error) => {
                const errors = error.message
                dispatch(commentFailure(errors))
            })
    }
}