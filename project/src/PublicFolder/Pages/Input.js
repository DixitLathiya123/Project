import React from 'react'
import { Field , ErrorMessage } from 'formik' 
import TextError from '../Pages/TextError'

function Input(props) { 
    const { lable,name,...rest } = props
    return (
        <div className="form-group input">
            <label htmlFor={name}><b>{lable}: </b></label>
            <Field className="inputbox" id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Input
