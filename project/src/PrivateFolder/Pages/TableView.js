import React, { useEffect } from 'react'
import HeaderAndSidebar from '../Header/HeaderAndSidebar'
import { useDispatch, useSelector } from 'react-redux';
import { getBlogById } from '../../Redux/Actions';


function TableView() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBlogById())
    }, [])

    const blogById = useSelector(state => state.getBlogById.blogById.blog)
    console.log(blogById);

    return (
        <HeaderAndSidebar title="table">
           table 1
        </HeaderAndSidebar>
    )
}

export default TableView
