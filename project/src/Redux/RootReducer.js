import {combineReducers} from 'redux'
import {reducer,loginReducer,CountryReducer, StateReducer} from './Reducers'

const rootreducer =combineReducers({
    register : reducer,
    login : loginReducer,
    country : CountryReducer,
    states : StateReducer
})

export default rootreducer