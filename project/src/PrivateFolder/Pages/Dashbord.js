import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Card } from 'antd';

import 'react-toastify/dist/ReactToastify.css';
import HeaderAndSidebar from '../Header/HeaderAndSidebar'
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog, getBlogById } from '../../Redux/Actions';
import Like from '../../PublicFolder/Image/likeImage.png'
import disLike from '../../PublicFolder/Image/dislike.png'
import comment from '../../PublicFolder/Image/comment.png'

function Dashbord() {
    const { Meta } = Card;

    const dispatch = useDispatch()

    const [social, setSocial] = useState({
        like: 100,
        dislike: 10,
        likeActive: false,
        dislikeActive: false
    })
    const blogById = useSelector(state => state.getBlogById.blogById.blog)
    useEffect(() => {
        dispatch(getBlogById())
    }, [])

    const deleteBlogById = (deleteId) => {
        dispatch(deleteBlog(deleteId))
    }

    const setDislike = () => {

        if (social.likeActive === true) {
            setSocial({
                dislikeActive: true,
                likeActive: false,
                like: social.like - 1,
                dislike: social.dislike + 1,
            })
        }
        else if (social.dislikeActive === true) {
            setSocial({
                ...social,
                dislikeActive: false,
                dislike: social.dislike - 1
            })
        }
        else if (social.dislikeActive === false) {
            setSocial({
                ...social,
                dislikeActive: true,
                dislike: social.dislike + 1
            })
        }


    }
    const setLike = () => {

        if (social.dislikeActive === true) {
            setSocial({
                dislikeActive: false,
                likeActive: true,
                dislike: social.dislike - 1,
                like: social.like + 1
            })

        }
        else if (social.likeActive === true) {
            setSocial({
                ...social,
                likeActive: false,
                like: social.like - 1
            })
        }
        else if (social.likeActive === false) {
            setSocial({
                ...social,
                likeActive: true,
                like: social.like + 1
            })
        }
    }

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
                        blogById && blogById.map((item, i) => {
                            return (
                                <>
                                    <Card className="blogcard" key={i}
                                        // hoverable
                                        style={{ width: 320 }}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    >
                                        <div className="row">
                                            <div className="col-8">
                                                <Meta title={item.blogTitle} description={item.blogContent} />
                                            </div>
                                            <div className="col-4">
                                                <div className="row ">
                                                    <div className="deleteButton">
                                                        <Button onClick={() => { deleteBlogById(item._id) }}>Delete</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row social">
                                            <img hoverable onClick={() => setLike()} src={Like} alt="like" height="30%" width="30%" />{social.like}
                                            <img hoverable onClick={() => setDislike()} src={disLike} alt="dislike" height="30%" width="30%" />{social.dislike}
                                            <img hoverable src={comment} alt="comment" height="30%" width="30%" />
                                        </div>

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
