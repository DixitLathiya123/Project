import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
    AllBlog,
    Dashbord,
    ResetPassword,
    SingleBlog,
    TableView,
    UpdateProfile,
    Contact,
    Error404,
    ForgetToNew,
    Forgot,
    Home,
    Login,
    Register,
} from '../screen/screenIndex'

import PrivateRouter from './PrivateRouter'
import {Footer} from '../components/componentIndex'
import LandingPage from '../LandingPage'

function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/forgot" component={Forgot} />
                    <Route exact path="/forget-password/link/" component={Error404} />
                    <Route path="/forget-password/link/" component={ForgetToNew} />
                    <PrivateRouter exact path="/dashbord" component={Dashbord} />
                    <PrivateRouter exact path="/allBlog" component={AllBlog} />
                    <PrivateRouter exact path="/update" component={UpdateProfile} />
                    <PrivateRouter exact path="/table" component={TableView} />
                    <PrivateRouter exact path="/singleBlog" component={SingleBlog} />
                    <PrivateRouter exact path="/changePassword" component={ResetPassword} />
                    <Route exact path="*" component={Error404} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default Routes