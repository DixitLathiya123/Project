import React, { useEffect } from 'react'
import { Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner'

import { isEmpty } from '../../services/isEmpty'
import { HeaderAndSidebar } from '../../components/componentIndex';
import { getAllBlog } from '../../action/actionIndex';
import { useHistory } from 'react-router-dom';

function AllBlog() {
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllBlog())
    }, [])

    const Blog = useSelector(state => state.getAllBlog.Blogs.blogList)
    const { Meta } = Card;

    return (
        <HeaderAndSidebar>
            <div className="row allblog">
                {isEmpty(Blog) &&
                    <div className="loader">
                        <Loader type="Bars" color="#00BFFF" height={80} width={80} />
                    </div>
                }
                {
                    !isEmpty(Blog) && Blog.map((item, i) => {
                        return (
                            <>
                                <Card key={i}
                                    className="blogimage"
                                    hoverable
                                    style={{ width: 320 }}
                                    cover={
                                        <img
                                            height="250px"
                                            alt="example"
                                            src={process.env.REACT_APP_API + "/" + item.blogImagePath}
                                            onClick={() => {
                                                localStorage.setItem('singleBlogId', item._id)
                                                setTimeout(() => {
                                                    history.push("/singleBlog")
                                                }, 1000);
                                            }}
                                        />
                                    }
                                >
                                    <Meta className="blogContent" title={item.blogTitle} description={item.blogContent} />
                                    
                                </Card>
                            </>
                        )
                    })
                }
            </div>
        </HeaderAndSidebar>
    )
}

export default AllBlog
