import React, { useEffect } from 'react'
import HeaderAndSidebar from '../Header/HeaderAndSidebar'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from '../../Redux/Actions';



function UpdateProfile() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserById())
    }, [])


    return (
        <div>
            <HeaderAndSidebar title="update">
            <div className="row">
                    <div className="col-12  blogbutton">
                        <Button className="blogbutton2" variant="dark"><Link to="/resetPassword">Reset Password</Link></Button >
                    </div>
                </div>
            </HeaderAndSidebar>
        </div>
    )
}

export default UpdateProfile
