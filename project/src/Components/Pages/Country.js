import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import { isEmpty } from '../../services/isEmpty'
import Loader from 'react-loader-spinner'

function Country(props) {
    const { lable, name, option, ...rest } = props
    return (
        <div className="form-group">
            <label htmlFor={name}>{lable}</label>
            <Field as="select" id={name} name={name} {...rest} >
                {
                    isEmpty(option) &&
                    <div className="loader">
                        <Loader type="Bars" color="#00BFFF" height={20} width={20} />
                    </div>
                }
                {
                    !isEmpty(option) && option.map((item) => {
                        return (
                            <option key={item.Id} value={item.Id}>
                                {item.CountryName}
                            </option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}
export default Country