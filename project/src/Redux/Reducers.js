import { REQUEST, SUCCESS, FAILURE ,LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE} from './Actions'
import { Register, Login } from './State'

//register
export const reducer = (state = Register, action) => {
    switch (action.type) {
        case REQUEST: return {
            ...state,
            loading: true
        }

        case SUCCESS: return {
            ...state,
            loading: false,
            registerStatus: 'success',
            allUser: action.payload
        }

        case FAILURE: return {
            ...state,
            loading: false,
            registerStatus: '',
            allUser: [],
            error: action.payload
        }

        default:
            return state;
    }
}

//login
export const loginReducer = (state = Login, action) => {
    switch (action.type) {
        case LOGIN_REQUEST: return {
            ...state,
            loading: true
        }

        case LOGIN_SUCCESS: return {
            ...state,
            loading: false,
            LoginToken: action.payload
        }

        case LOGIN_FAILURE: return {
            ...state,
            loading: false,
            LoginToken: '',
            error: action.payload
        }

        default:
            return state;
    }
}