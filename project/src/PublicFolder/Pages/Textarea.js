import React from 'react'
import { Field , ErrorMessage } from 'formik' 
import TextError from '../Pages/TextError'



function Textarea(props) {
    const { lable,name,...rest } = props
    return (
        <div className="form-group">
            <label htmlFor={name}>{lable}</label>
            <Field as="textarea" id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Textarea