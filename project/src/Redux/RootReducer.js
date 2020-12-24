import {combineReducers} from 'redux'
import {reducer,loginReducer} from './Reducers'

const rootreducer =combineReducers({
    register : reducer,
    login : loginReducer
})

export default rootreducer