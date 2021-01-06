import { combineReducers } from 'redux'
import {
    getAllBlogReducer,
    getBlogByIdReducer,
    initialStateReducer
} from '../reducer/reducerIndex'

const rootreducer = combineReducers({
    initialState: initialStateReducer,
    getAllBlog: getAllBlogReducer,
    getBlogById: getBlogByIdReducer,
})

export default rootreducer