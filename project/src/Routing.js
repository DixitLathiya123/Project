import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contact from './PublicFolder/Register/Contact'
import Home from './PublicFolder/Register/Home'
import Login from './PublicFolder/Register/Login'
import Register from './PublicFolder/Register/RegisterPage'
import Error404 from './PublicFolder/Register/Error404'
import Dashbord from './PrivateFolder/Pages/Dashbord'
import UpdateProfile from './PrivateFolder/Pages/UpdateProfile'
import TableView from './PrivateFolder/Pages/TableView'
import Contact2 from './PrivateFolder/Pages/Contact2'

function Routing() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/contact" component={Contact} />

                    <Route exact path="/dash" component={Dashbord} />
                    <Route exact path="/update" component={UpdateProfile} />
                    <Route exact path="/table" component={TableView} />
                    <Route exact path="/info" component={Contact2} />


                    <Route exact path="*" component={Error404} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routing
