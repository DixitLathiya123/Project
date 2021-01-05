import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../Routes/Auth'

const PrivateRouter = ({ component: Component, ...rest }) =>
(
    <Route {...rest} render={
        props => isAuthenticated()
        ?
        (
                <Component {...props} />
            )
            :
            (
                <Redirect to={
                    {
                        pathname: "/home",
                    }
                }
                />
            )
    } />
)

export default PrivateRouter
