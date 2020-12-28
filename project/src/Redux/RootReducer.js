import {combineReducers} from 'redux'
import {reducer,loginReducer,CountryReducer, StateReducer , MessageReducer} from './Reducers'

const rootreducer =combineReducers({
    register : reducer,
    login : loginReducer,
    country : CountryReducer,
    states : StateReducer,
    message : MessageReducer,
})

export default rootreducer