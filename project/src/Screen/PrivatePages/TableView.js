import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlog } from '../../action/getAllBlog'
import { HeaderAndSidebar } from '../../components/componentIndex'
import { isEmpty } from '../../services/isEmpty'


function TableView() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllBlog())
    }, [])

    const Blog = useSelector(state => state.getAllBlog.Blogs.blogList)

    return (
        <HeaderAndSidebar title="table">
            <table id="example" class="table table-striped table-bordered ">
                <thead>
                    <tr>
                        <th>Blog Title</th>
                        <th>Blog Content</th>
                        <th>Created By</th>
                        <th>Blog Image</th>
                        <th>Blog date</th>
                        <th>Blog Likes</th>
                        <th>Blog DisLikes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !isEmpty(Blog) && Blog.map((item) => {
                            return (

                                <tr>
                                    <td>{item.blogTitle .slice(0,20)}</td>
                                    <td>{item.blogContent.slice(0,20)}</td>
                                    <td>{item.blogCreatedBy}</td>
                                    <td><img src={process.env.REACT_APP_API + "/" + item.blogImagePath} height="100px" width="100px" alt="blogImage"/></td>
                                    <td>{item.blogDate}</td>
                                    <td>{item.blogLike.length}</td>
                                    <td>{item.blogDislike.length}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th>Blog Title</th>
                        <th>Blog Content</th>
                        <th>Created By</th>
                        <th>Blog Image</th>
                        <th>Blog date</th>
                        <th>Blog Likes</th>
                        <th>Blog DisLikes</th>
                    </tr>
                </tfoot>
            </table>
        </HeaderAndSidebar>
    )
}

export default TableView
