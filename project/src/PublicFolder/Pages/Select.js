import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../Pages/TextError'


function Select(props) {
    const { lable, name, option, ...rest } = props
    return (
        <div className="form-control">
            <label htmlFor={name}>{lable}</label>
            <Field as="select" id={name} name={name} {...rest} >
                {
                    option.map((item)=>{
                        return (
                            <option key={item.key} value={item.value}>
                                {item.key}
                            </option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Select
