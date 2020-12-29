import {combineReducers} from 'redux'
import {reducer,loginReducer,CountryReducer, StateReducer , MessageReducer, ForgetReducer, ForgetToNewReducer} from './Reducers'

const rootreducer =combineReducers({
    register : reducer,
    login : loginReducer,
    country : CountryReducer,
    states : StateReducer,
    message : MessageReducer,
    forget : ForgetReducer,
    forgetToNew : ForgetToNewReducer,
})

export default rootreducer