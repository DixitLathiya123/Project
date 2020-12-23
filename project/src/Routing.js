import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contact from './PublicFolder/Contact'
import Home from './PublicFolder/Home'
import Login from './PublicFolder/Login'
import Register from './PublicFolder/RegisterPage'
import Error404 from './PublicFolder/Error404'



function Routing() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="*" component={Error404} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routing
