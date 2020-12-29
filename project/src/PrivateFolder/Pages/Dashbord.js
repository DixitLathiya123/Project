import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Card } from 'antd';


import 'react-toastify/dist/ReactToastify.css';
import HeaderAndSidebar from '../Header/HeaderAndSidebar'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlog } from '../../Redux/Actions';

function Dashbord() {
    const { Meta } = Card;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllBlog())
    }, [])
    const Blog = useSelector(state => state.getAllBlog.Blogs.blogList)
    return (
        < div >
            <HeaderAndSidebar title="dashbord">
                <div className="row">
                    <div className="col-12  blogbutton">
                        <Button className="blogbutton2" variant="dark"><Link to="/createBlog"> Create Blog</Link></Button >
                    </div>
                </div>
                <div className="row allblog">
                    {
                        Blog && Blog.map((item) => {
                            return (
                                <>
                                    <Card className="blogcard"
                                        hoverable
                                        style={{ width: 220 }}
                                    // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    >
                                        <Meta title={item.blogTitle} description={item.blogContent} />
                                    </Card>
                                </>
                            )
                        })
                    }
                </div>
            </HeaderAndSidebar>
        </div >

    )
}


export default Dashbord
