import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'antd';


import { isAuthenticated } from '../../PrivateRouter/Auth'
import Header from './Header'
import Slider from '../Pages/Slider'
import { getAllBlog } from '../../Redux/Actions'



function Home() {
    const { Meta } = Card;
    const history = useHistory()
    const dispatch = useDispatch()
    if (isAuthenticated() !== false) {
        history.push("/")
    }
    useEffect(() => {
        dispatch(getAllBlog())
    }, [])

    const Blog = useSelector(state => state.getAllBlog.Blogs.blogList)

    return (
        <div>
            <Header />
            <Slider />
            <div className="row allblog">
            {
                Blog && Blog.map((item) => {
                    return (
                        <>
                            <Card
                                hoverable
                                style={{ width: 300 }}
                                // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title={item.blogTitle} description={item.blogContent} />
                            </Card>
                        </>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Home
