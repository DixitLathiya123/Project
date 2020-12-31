import React from 'react'
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom'
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
import ForgetToNew from './PublicFolder/Register/ForgetToNew'
import CreateBlog from './PrivateFolder/Pages/CreateBlog'
import ResetPassword from './PrivateFolder/Pages/ResetPassword'
import SingleBlog from './PrivateFolder/Pages/SingleBlog'

function Routing() {
    if (isAuthenticated() !== false) {
        <Route exact path="/" component={Dashbord} />
    }
    return (
        <div>
            <Router>
                <Switch>
                    {(isAuthenticated()) ? <Route exact path="/" component={Dashbord} /> : <Route exact path="/" component={Home} />}
            
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/forgot" component={Forgot} />
                    <Route exact path="/forget-password/link/" component={Error404} />
                    <Route path="/forget-password/link/" component={ForgetToNew} />

                    <PrivateRouter exact path="/dash" component={Dashbord} />
                    <PrivateRouter exact path="/update" component={UpdateProfile} />
                    <PrivateRouter exact path="/table" component={TableView} />
                    <PrivateRouter exact path="/createBlog" component={CreateBlog} />
                    <PrivateRouter exact path="/singleBlog" component={SingleBlog} />
                    <PrivateRouter exact path="/resetPassword" component={ResetPassword} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routing
