import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'antd';
import { Formik, Form } from 'formik'
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Loader from 'react-loader-spinner'

import { isEmpty } from '../../services/isEmpty'
import { isAuthenticated } from '../../routes/Auth'
import {Header,FormikControl, Slider} from '../../components/componentIndex'
import { getAllBlog ,userGoingForLogin} from '../../action/actionIndex'
import Like from '../../assets/Image/likeImage.png'
import disLike from '../../assets/Image/dislike.png'
import comment from '../../assets/Image/comment.png'


function Home(props) {
    const history = useHistory()

    if (isAuthenticated() !== false) {
        history.push("/dashbord")
    }

    const { Meta } = Card;
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Blog = useSelector(state => state.getAllBlog.Blogs.blogList)

    useEffect(() => {
        dispatch(getAllBlog())
    }, [])

    const initialValues = {
        email: '',
        password: '',
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Format*').required('Email Required*'),
        password: Yup.string().length(6).required('Password Required*')
    })

    const onSubmit = values => dispatch(userGoingForLogin(values, props))
    return (
        <div >
            <Header />
            <Slider />
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
                                    style={{ width: 300 }}
                                    cover={<img alt="example" height="250px" src={process.env.REACT_APP_API + "/" + item.blogImagePath} />}
                                >
                                    <Meta className="blogContent" title={item.blogTitle} description={item.blogContent} />
                                    <div className="row social">
                                        <button className="likeDislikeButton" onClick={() => { handleShow() }}><img hoverable src={Like} alt="like" height="100%" width="100%" /></button>
                                        <button className="likeDislikeButton" onClick={() => { handleShow() }}><img hoverable src={disLike} alt="dislike" height="100%" width="100%" /></button>
                                        <button className="likeDislikeButton" onClick={() => { handleShow() }}><img hoverable src={comment} alt="comment" height="100%" width="100%" /></button>
                                    </div>
                                </Card>
                            </>
                        )
                    })
                }
            </div>
            <Modal show={show} onHide={() => { handleClose() }} className="modal">
                <Modal.Header closeButton  style={{"outline": "none"}}>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="loginpopup">
                        <div className="row" style={{ "justifyContent": "center" }}>
                            <div className="form col-6" >
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={onSubmit}
                                >
                                    {
                                        (formik) => {
                                            return (
                                                <Form>
                                                    <FormikControl
                                                        control="input"
                                                        type="email"
                                                        lable="Email*"
                                                        name="email"
                                                    />
                                                    <FormikControl
                                                        control="input"
                                                        type="password"
                                                        lable="Password*"
                                                        name="password"
                                                    />
                                                    <div className="btndiv">
                                                        <Button className="button" type="submit" variant="info">Login</Button>
                                                        <Button className="button" variant="info" onClick={() => { history.push(`/register`); }}>Register</Button >
                                                    </div>
                                                    <div className="forgot"><Link to="forgot">Forgot password?</Link></div>
                                                </Form>
                                            )
                                        }
                                    }
                                </Formik>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Home
