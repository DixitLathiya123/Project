import { REQUEST,
     SUCCESS,
     FAILURE ,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE ,
    COUNTRY_FAILURE,
    COUNTRY_REQUEST,
    COUNTRY_SUCCESS,
    STATE_FAILURE,
    STATE_SUCCESS,
    STATE_REQUEST
} from './Actions'
import { Register,
     Login ,Country,States} from './State'


//State
export const StateReducer = (state = States, action) => {
    switch (action.type) {
        case STATE_FAILURE: return {
            ...state,
            loading: true
        }

        case STATE_SUCCESS: return {
            
            ...state,
            loading: false,
            StateData:action.payload,
            error: ''            
        }

        case STATE_REQUEST: return {
            ...state,
            loading: false,
            StateData:[],
            error: action.payload
        }
        default:
            return state;
    }
}


//Country
export const CountryReducer = (state = Country, action) => {
    switch (action.type) {
        case COUNTRY_REQUEST: return {
            ...state,
            loading: true
        }

        case COUNTRY_SUCCESS: return {
            
            ...state,
            loading: false,
            CountryData:action.payload,
            error: ''            
        }

        case COUNTRY_FAILURE: return {
            ...state,
            loading: false,
            CountryData:[],
            error: action.payload
        }
        default:
            return state;
    }
}

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
            ResponseStatus: action.payload.ResponseStatus ? action.payload.ResponseStatus : '',
            message: action.payload.message
        }

        case FAILURE: return {
            ...state,
            loading: false,
            ResponseStatus: '',
            message: '',
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