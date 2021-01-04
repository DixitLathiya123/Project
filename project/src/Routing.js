import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contact from './PublicFolder/Register/Contact'
import Home from './PublicFolder/Register/Home'
import Login from './PublicFolder/Register/Login'
import Register from './PublicFolder/Register/RegisterPage'
import Error404 from './PublicFolder/Register/Error404'
import Dashbord from './PrivateFolder/Pages/Dashbord'
import UpdateProfile from './PrivateFolder/Pages/UpdateProfile'
import TableView from './PrivateFolder/Pages/TableView'
import PrivateRouter from './PrivateRouter/PrivateRouter'
import Forgot from './PublicFolder/Register/Forgot'
import ForgetToNew from './PublicFolder/Register/ForgetToNew'
import CreateBlog from './PrivateFolder/Pages/CreateBlog'
import ResetPassword from './PrivateFolder/Pages/ResetPassword'
import SingleBlog from './PrivateFolder/Pages/SingleBlog'

function Routing() {

    return (
        <div>
            <Router>
                <Switch>
                    <PrivateRouter exact path="/" component={Dashbord} />
                    <Route exact path="/" component={Home} />

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