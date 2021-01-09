import React from 'react'
import { isEmpty } from '../../services/isEmpty';

function TextError(props) {
    console.log(props);
    return (
        <>
            {
               !isEmpty(props.children)  ?
                    <p className="error">
                        {props.children}
                    </p>
                :
                <p>&nbsp;</p>
            }
        </>
    )
}
export default TextError