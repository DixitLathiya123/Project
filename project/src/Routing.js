import React from 'react'
import { BrowserRouter as Router, Switch, Route, BrowserRouter, useHistory } from 'react-router-dom'
import Contact from './PublicFolder/Register/Contact'
import Home from './PublicFolder/Register/Home'
import Login from './PublicFolder/Register/Login'
import Register from './PublicFolder/Register/RegisterPage'
import Error404 from './PublicFolder/Register/Error404'
import Dashbord from './PrivateFolder/Pages/Dashbord'
import UpdateProfile from './PrivateFolder/Pages/UpdateProfile'
import TableView from './PrivateFolder/Pages/TableView'
import PrivateRouter from './PrivateRouter/PrivateRouter'
import { isAuthenticated } from './PrivateRouter/Auth'
import Forgot from './PublicFolder/Register/Forgot'

function Routing() {
    const history = useHistory()
    if(isAuthenticated() !== false){
        <Route exact path="/" component={Dashbord} />
    }
    return (
        <div>
            <Router>
                <BrowserRouter>
                    <Switch>
                        {(isAuthenticated() )? <Route exact path="/" component={Dashbord} /> : <Route exact path="/" component={Home} />}
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/forgot" component={Forgot} />
                        <PrivateRouter exact path="/dash" component={Dashbord} />
                        <PrivateRouter exact path="/update" component={UpdateProfile} />
                        <PrivateRouter exact path="/table" component={TableView} />
                    </Switch>
                </BrowserRouter>

            </Router>


        </div>
    )
}

export default Routing
