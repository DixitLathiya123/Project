import React, { useEffect } from 'react'
import axios from 'axios'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './App.css'
import { IconContext } from 'react-icons'
import { success, failure} from './Redux/Actions'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('https://node-demox.herokuapp.com/login/loginrecord/')
            .then(Response => {
                const allUser = Response.data
                dispatch(success(allUser))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(failure(errorMsg))
            })
    }, [])
    return (
        <div>
            <IconContext.Provider value={{ color: '#fff' }} >
                <div className="navbar" >
                    <div className="col-md-6">
                        <Link to="#" className="menu-bars" >
                            <FaIcons.FaBars />
                        </Link>
                    </div>
                    <div className="col-md-6 menu">
                        <Link to="/" className="menu-bars2" >
                            Home
                    </Link>
                        <Link to="/contact" className="menu-bars2" >
                            Contact Us
                    </Link>
                        <Link to="/login" className="menu-bars2" >
                            Get In Touch
                    </Link>
                    </div>
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default Header
