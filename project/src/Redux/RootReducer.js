import { combineReducers } from 'redux'
import {
    reducer,
    loginReducer,
    CountryReducer,
    StateReducer,
    MessageReducer,
    ForgetReducer,
    ForgetToNewReducer,
    getAllBlogReducer,
    CreateBlogReducer,
    getBlogByIdReducer,
    deleteBlogReducer,
    getUserByIdReducer,
    changePasswordReducer,
} from './Reducers'

const rootreducer = combineReducers({
    register: reducer,
    login: loginReducer,
    country: CountryReducer,
    states: StateReducer,
    message: MessageReducer,
    forget: ForgetReducer,
    forgetToNew: ForgetToNewReducer,
    getAllBlog: getAllBlogReducer,
    createBlog: CreateBlogReducer,
    getBlogById: getBlogByIdReducer,
    deletBlog: deleteBlogReducer,
    getUserById: getUserByIdReducer,
    changePassword: changePasswordReducer,
})

export default rootreducer