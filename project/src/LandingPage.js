import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from './routes/Auth'

function LandingPage() {
    return (
        <div>
            Welcome To My blogs
            {isAuthenticated() ? <button><Link to="/dashbord" >Apply Now</Link></button> : <button><Link to="/register" >Register Now</Link></button>}
        </div>
    )
}

export default LandingPage
