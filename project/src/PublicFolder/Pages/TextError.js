import React from 'react'
import { isEmpty } from '../../Services/isEmpty';

function TextError(props) {
    return (
        <>
            {
               !isEmpty(props.children)  ?
                    <p className="error">
                        {props.children}
                    </p>
                :
                <p>false&nbsp;</p>
            }
        </>
    )
}
export default TextError