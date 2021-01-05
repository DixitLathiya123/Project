import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Formik, Form } from 'formik'
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import Loader from 'react-loader-spinner'
import { useDispatch } from 'react-redux'

import { HeaderAndSidebar, FormikControl } from '../../Components/componentIndex'

import { isEmpty } from '../../Services/isEmpty'
import { blogLike, comment } from '../../Action/actionIndex';
import Like from '../../Assets/Image/likeImage.png'
import LikeIcon from '../../Assets/Image/likeImageIcon.jpg'
import disLike from '../../Assets/Image/dislike.png'
import disLikeIcon from '../../Assets/Image/dislikeIcon.png'
import commentImage from '../../Assets/Image/comment.png'

function SingleBlog(props) {
    const { Meta } = Card;
    const dispatch = useDispatch()

    const singleDataBlog = props.location.state
    const loginDataFromApi = JSON.parse(localStorage.getItem('loginData'))
    const loginData =  loginDataFromApi.data
    const LikedBlog =singleDataBlog && singleDataBlog.blogLike.includes(loginData[0]._id)
    const DisLikedBlog = singleDataBlog && singleDataBlog.blogDislike.includes(loginData[0]._id)

    const initialValues = {
        blogComment: []
    }

    const [commentStatus, setCommentStatus] = useState(false)

    const onSubmit = (values, onSubmitProps) => {
        dispatch(comment(values, singleDataBlog._id, onSubmitProps))
    }

    return (
        <HeaderAndSidebar title="dashbord">
            <div className="row">
                <div className="col-12  blogbutton">
                    <Button className="blogbutton2" variant="dark"><Link to="/dashbord"> Back To Blog</Link></Button >
                </div>
            </div>
            <div className="singleBlog1">
                {isEmpty(singleDataBlog) &&
                    <div className="loader">
                        <Loader type="Bars" color="#00BFFF" height={80} width={80} />
                    </div>
                }
                {
                    <Card className="singleBlog2"
                        hoverable
                        style={{ width: 320 }}
                        cover={
                            <img
                                alt="example"
                                src={process.env.REACT_APP_API + "/" + singleDataBlog.blogImagePath}
                            />
                        }
                    >
                        <div className="row">
                            <Meta title={singleDataBlog.blogTitle} description={singleDataBlog.blogContent} />
                        </div>
                        <div>
                            <img
                                hoverable
                                onClick={()=>{
                                    dispatch(blogLike(singleDataBlog._id))
                                }}
                                src={LikedBlog ? LikeIcon : Like}
                                alt="like"
                                height={LikedBlog ? "8%" : "10%"}
                                width={LikedBlog ? "10%" : "10%"}
                            />
                            <img
                                hoverable
                                src={DisLikedBlog ? disLikeIcon : disLike}
                                alt="dislike"
                                height={DisLikedBlog ? "8%" : "8%"}
                                width={DisLikedBlog ? "8%" : "8%"}
                            />
                            <img
                                hoverable
                                onClick={
                                    () => setCommentStatus(!commentStatus)
                                }
                                src={commentImage}
                                alt="comment"
                                height="10%"
                                width="10%"
                            />
                        </div>

                        {
                            commentStatus === true &&
                            <div>
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={onSubmit}
                                >
                                    {
                                        (formik) => {

                                            return (
                                                <Form>

                                                    <div className="row">
                                                        <div className="col-9">
                                                            <FormikControl className="inputComment"
                                                                control="input"
                                                                type="text"
                                                                lable="Comment"
                                                                name="blogComment"
                                                            />
                                                        </div>
                                                        <div className="col-3 btndiv">
                                                            <Button className="button" type="submit" variant="info">Comment</Button>
                                                        </div>
                                                    </div>
                                                </Form>
                                            )
                                        }
                                    }
                                </Formik>
                            </div>
                        }
                        <hr />
                        <div className="row commentLable">
                            <h4>Comments</h4>
                        </div>
                        <div>

                        </div>
                    </Card >
                }
            </div >
        </HeaderAndSidebar >
    )
}

export default SingleBlog