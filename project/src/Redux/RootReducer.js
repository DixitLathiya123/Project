import {combineReducers} from 'redux'
import {reducer,loginReducer,CountryReducer, StateReducer , MessageReducer, ForgetReducer, ForgetToNewReducer,getAllBlogReducer ,CreateBlogReducer} from './Reducers'

const rootreducer =combineReducers({
    register : reducer,
    login : loginReducer,
    country : CountryReducer,
    states : StateReducer,
    message : MessageReducer,
    forget : ForgetReducer,
    forgetToNew : ForgetToNewReducer,
    getAllBlog : getAllBlogReducer,
    createBlog : CreateBlogReducer,
})

export default rootreducer