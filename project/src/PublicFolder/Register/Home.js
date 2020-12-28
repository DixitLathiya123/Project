import React from 'react'
import { useHistory } from 'react-router-dom'
import { isAuthenticated } from '../../PrivateRouter/Auth'
import Header from './Header'

function Home() {
    const history = useHistory()
    if(isAuthenticated() !== false){
        history.push("/")
    }
    return (
        <div>
            <Header/>
            Home
        </div>
    )
}

export default Home
