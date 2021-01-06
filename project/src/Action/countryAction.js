import axios from 'axios'
import {  headerWithOutToken } from '../services/header'

//country
export const COUNTRY_REQUEST = "COUNTRY_REQUEST"
export const COUNTRY_SUCCESS = "COUNTRY_SUCCESS"
export const COUNTRY_FAILURE = "COUNTRY_FAILURE"

//country
export const countryRequest = () => {
    return {
        type: COUNTRY_REQUEST
    }
}
export const countrySuccess = (country) => {
    return {
        type: COUNTRY_SUCCESS,
        payload: country,

    }
}
export const countryFailure = (error) => {
    return {
        type: COUNTRY_FAILURE,
        CountryData: [],
        payload: error
    }
}
export const getAllCountry = () => {

    return (dispatch) => {
        dispatch(countryRequest())
        axios.get(`${process.env.REACT_APP_API}/api/getAllCountry`, headerWithOutToken())
            .then((Response) => {
                const country = Response.data.countryList
                dispatch(countrySuccess(country))
            })
            .catch((error) => {
                const errors = error.message
                dispatch(countryFailure(errors))
            })
    }
}