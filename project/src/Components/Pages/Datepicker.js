import React from 'react'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Datepicker(props) {
    const { lable, name, ...rest } = props
    return (
        <div className="form-group">
            <label htmlFor={name}>{lable}</label>
            <Field name={name}>
                {
                    ({ form, field }) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return (
                            <DateView
                                id={name}
                                {...field}
                                {...rest}
                                selected={value}
                                onChange={val => setFieldValue(name, val)}
                            />
                        )
                    }
                }
            </Field>
                <ErrorMessage name={name} component={TextError} />
        </div>
    )
}
export default Datepicker