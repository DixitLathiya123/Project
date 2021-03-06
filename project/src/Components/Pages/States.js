import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../Pages/TextError'
import { isEmpty } from '../../services/isEmpty'

function States(props) {
    const { lable, name, option, ...rest } = props
    return (
        <div className="form-group">
            <label htmlFor={name}>{lable}</label>
            <Field as="select" id={name} name={name} {...rest} >
                {
                    !isEmpty(option) && option.map((item) => {
                        return (
                            <option key={item.Id} value={item.Id}>
                                {item.State}
                            </option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}
export default States
