import React from 'react'
import Input from './Input'
import Textarea from './Textarea'
import Select from './Select'
import Radio from './Radio'
import Checkbox from './Checkbox'
import Datepicker from './Datepicker'
import  Maps  from './Map'

function FormikControl(props) {
    const { control , ...rest} = props
    switch (control) {
        case 'input':return <Input {...rest}/>
        case 'textarea': return <Textarea {...rest}/>
        case 'select': return <Select {...rest}/>
        case 'radio': return <Radio {...rest} />
        case 'checkbox': return <Checkbox {...rest}/>
        case 'date': return <Datepicker {...rest} />
        case 'map': return <Maps {...rest} />
        default: return null
    }
}
export default FormikControl
