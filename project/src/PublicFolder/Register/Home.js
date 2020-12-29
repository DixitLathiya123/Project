import React from 'react'
import { useHistory } from 'react-router-dom'
import { isAuthenticated } from '../../PrivateRouter/Auth'
import Header from './Header'
import Slider from '../Pages/Slider'

function Home() {
    const history = useHistory()
    if(isAuthenticated() !== false){
        history.push("/")
    }
    return (
        <div>
            <Header/>
            <Slider />
            Home
        </div>
    )
}

export default Home
