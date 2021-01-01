import React from 'react'
import { Field, ErrorMessage} from 'formik'
import TextError from '../Pages/TextError'

function Radio(props) {
    const { lable, name, option, ...rest } = props
    return (
        <div className="form-group">
            <label htmlFor={name}>{lable}</label>
            <Field name={name} {...rest} >
                {
                    ({ field }) => {
                        return option.map(item => {
                            return (
                                <React.Fragment key={item.key}>
                                    <input type="radio" id={item.value} {...field} value={item.value} checked={field.value === item.value} />
                                    <label htmlFor={item.value}>{item.key}</label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}
export default Radio