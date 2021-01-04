import { combineReducers } from 'redux'
import {
    // reducer,
    // loginReducer,
    // CountryReducer,
    // StateReducer,
    // MessageReducer,
    // ForgetReducer,
    // ForgetToNewReducer,
    getAllBlogReducer,
    // CreateBlogReducer,
    getBlogByIdReducer,
    // deleteBlogReducer,
    // getUserByIdReducer,
    // changePasswordReducer,
    // updateProfileReducer,
    initialStateReducer
} from './Reducers'

const rootreducer = combineReducers({
    initialState : initialStateReducer,
    // register: reducer,
    // login: loginReducer,
    // country: CountryReducer,
    // states: StateReducer,
    // message: MessageReducer,
    // forget: ForgetReducer,
    // forgetToNew: ForgetToNewReducer,
    getAllBlog: getAllBlogReducer,
    // createBlog: CreateBlogReducer,
    getBlogById: getBlogByIdReducer,
    // deletBlog: deleteBlogReducer,
    // getUserById: getUserByIdReducer,
    // changePassword: changePasswordReducer,
    // updateProfile: updateProfileReducer,
})

export default rootreducer