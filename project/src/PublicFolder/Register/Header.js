import React from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import '../../App.css'

function Header() {
    return (
        <div className="sticky">
            <IconContext.Provider value={{ color: '#fff' }} >
                <div className="navbar" >
                    <div className="col-md-6">
                    </div>
                    <div className="col-md-6 menu">
                        <Link to="/home" className="menu-bars2" >
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
