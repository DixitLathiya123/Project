import React,{useEffect} from 'react'
import HeaderAndSidebar from '../Header/HeaderAndSidebar'
import { isAuthenticated } from '../../PrivateRouter/Auth'

function Dashbord() {
    // useEffect(() => {
    //     window.location.reload(true);
    // }, [])
    return (
        < div >
        <HeaderAndSidebar title="dashbord">
            Home123
                </HeaderAndSidebar>
        </div >

    )
}


export default Dashbord
