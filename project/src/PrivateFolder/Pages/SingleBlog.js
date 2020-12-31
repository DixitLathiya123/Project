import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Formik, Form } from 'formik'
import { Link } from 'react-router-dom';
import { Card } from 'antd';

import FormikControl from '../../PublicFolder/Pages/FormikControl'
import 'react-toastify/dist/ReactToastify.css';
import HeaderAndSidebar from '../Header/HeaderAndSidebar'
import { deleteBlog } from '../../Redux/Actions';
import Like from '../../PublicFolder/Image/likeImage.png'
import disLike from '../../PublicFolder/Image/dislike.png'
import comment from '../../PublicFolder/Image/comment.png'
import { useDispatch } from 'react-redux';

function SingleBlog(props) {
    const { Meta } = Card;

    const singleDataBlog = props.location.state

    const dispatch = useDispatch()


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

    const onSubmit = (values,onSubmitProps) => {
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
                {
                    <Card className="singleBlog2"
                        hoverable
                        style={{ width: 320 }}
                        cover={
                            <img
                                alt="example"
                                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            />
                        }
                    >
                        <div className="row">
                            <div className="col-8">
                                <Meta title={singleDataBlog.blogTitle} description={singleDataBlog.blogContent} />
                            </div>
                        </div>
                        <div className="row social">
                            <img hoverable onClick={() => setLike()} src={Like} alt="like" height="23%" width="23%" />{social.like}
                            <img hoverable onClick={() => setDislike()} src={disLike} alt="dislike" height="23%" width="23%" />{social.dislike}
                            <img hoverable onClick={() => setCommentStatus(!commentStatus)} src={comment} alt="comment" height="23%" width="23%" />
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
                                                        <div className="col-8">
                                                            <FormikControl className="inputComment"

                                                                control="input"
                                                                type="text"
                                                                lable="Comment"
                                                                name="comment"
                                                            />
                                                        </div>
                                                        <div className="col-4 btndiv">
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
                            <div>
                                {
                                    comments && comments.map((item,i) => {
                                        return <><h5>{item.comment}</h5><hr/></>
                                    })
                                }
                            </div>


                        </div>
                    </Card>
                }
            </div>
        </HeaderAndSidebar>
    )
}

export default SingleBlog
