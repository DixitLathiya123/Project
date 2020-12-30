import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'antd';


import { isAuthenticated } from '../../PrivateRouter/Auth'
import Header from './Header'
import Slider from '../Pages/Slider'
import { getAllBlog } from '../../Redux/Actions'
import Like from '../Image/likeImage.png'
import disLike from '../Image/dislike.png'
import comment from '../Image/comment.png'



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
                    Blog && Blog.map((item, i) => {
                        return (
                            <>
                                <Card key={i}
                                    className="blogimage"
                                    hoverable
                                    style={{ width: 300 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title={item.blogTitle} description={item.blogContent} />
                                    <div className="row social">
                                        <button className="likeDislikeButton" onClick={() => {alert("please login!")}}><img hoverable src={Like} alt="like" height="100%" width="100%" /></button>
                                        <button className="likeDislikeButton" onClick={() => {alert("please login!")}}><img hoverable src={disLike} alt="dislike" height="100%" width="100%" /></button>
                                        <button className="likeDislikeButton" onClick={() => {alert("please login!")}}><img hoverable src={comment} alt="comment" height="100%" width="100%" /></button>
                                    </div>
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
