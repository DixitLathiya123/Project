import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Formik, Form } from 'formik'
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import Loader from 'react-loader-spinner'

import FormikControl from '../../PublicFolder/Pages/FormikControl'
import HeaderAndSidebar from '../Header/HeaderAndSidebar'

import { isEmpty } from '../../Services/isEmpty'
import Like from '../../PublicFolder/Image/likeImage.png'
import LikeIcon from '../../PublicFolder/Image/likeImageIcon.jpg'
import disLike from '../../PublicFolder/Image/dislike.png'
import disLikeIcon from '../../PublicFolder/Image/dislikeIcon.png'
import comment from '../../PublicFolder/Image/comment.png'

function SingleBlog(props) {
    const { Meta } = Card;

    const singleDataBlog = props.location.state

    const initialValues = {
        comment: ''
    }

    const [social, setSocial] = useState({
        like: 100,
        dislike: 10,
        likeActive: false,
        dislikeActive: false
    })
    const [commentStatus, setCommentStatus] = useState(false)
    const [comments, setComments] = useState([])

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

    const onSubmit = (values, onSubmitProps) => {
        setComments([
            ...comments,
            values
        ])
        onSubmitProps.resetForm()
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
        <HeaderAndSidebar title="dashbord">
            <div className="row">
                <div className="col-12  blogbutton">
                    <Button className="blogbutton2" variant="dark"><Link to="/dash"> Back To Blog</Link></Button >
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
                                src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
                            />
                        }
                    >
                        <div className="row">
                            <Meta title={singleDataBlog.blogTitle} description={singleDataBlog.blogContent} />
                        </div>
                        <div>
                            <img
                                hoverable
                                onClick={
                                    () => setLike()
                                }
                                src={social.likeActive ? LikeIcon : Like}
                                alt="like"
                                height={social.likeActive ? "8%" : "10%"}
                                width={social.likeActive ? "10%" : "10%"}
                            />
                            {social.like}
                            <img
                                hoverable
                                onClick={
                                    () => setDislike()
                                }
                                src={social.dislikeActive ? disLikeIcon : disLike}
                                alt="dislike"
                                height={social.dislikeActive ? "8%" : "8%"}
                                width={social.dislikeActive ? "8%" : "8%"}
                            />
                            {social.dislike}
                            <img
                                hoverable
                                onClick={
                                    () => setCommentStatus(!commentStatus)
                                }
                                src={comment}
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
                                                                name="comment"
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

                            {!isEmpty(comments) &&
                                <div style={{ overflowY: 'scroll', height: 'calc(15vh - 20px)' }}>
                                    {
                                        !isEmpty(comments) && comments.map((item, i) => {
                                            return <>
                                                <h5>{item.comment}</h5>

                                                <hr />
                                            </>
                                        })
                                    }
                                </div>
                            }
                        </div>
                    </Card >
                }
            </div >
        </HeaderAndSidebar >
    )
}

export default SingleBlog