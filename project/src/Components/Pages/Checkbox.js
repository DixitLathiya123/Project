import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Checkbox(props) {
    const { lable, name, options, ...rest } = props
    return (
        <div className="form-group">
            <label htmlFor={name}>{lable}</label>
            <div className="display">
                <Field name={name} {...rest} >
                    {
                        ({ field }) => {
                            return options.map(item => {
                                return (
                                    <React.Fragment key={item.key}>
                                        <div >
                                            <input
                                                type="checkbox"
                                                id={item.value}
                                                {...field}
                                                value={item.value}
                                                checked={field.value.includes(item.value)}
                                            />
                                            <label htmlFor={item.value}>&nbsp;{item.key}</label>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                        }
                    }
                </Field>
            </div>
            <p><ErrorMessage name={name} component={TextError} /></p>
        </div>
    )
}
export default Checkbox