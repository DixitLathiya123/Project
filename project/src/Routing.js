import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contact from './PublicFolder/Register/Contact'
import Home from './PublicFolder/Register/Home'
import Login from './PublicFolder/Register/Login'
import Register from './PublicFolder/Register/RegisterPage'
import Error404 from './PublicFolder/Register/Error404'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'

function Routing() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
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
