import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { Card } from 'antd';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Loader from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal'

import { isEmpty } from '../../services/isEmpty'
import deleteButton from '../../assets/Image/delete.png'
import {HeaderAndSidebar,FormikControl} from '../../components/componentIndex'
import { createBlog, deleteBlog, getBlogById, } from '../../action/actionIndex';

function Dashbord() {
    const { Meta } = Card;
    const history = useHistory()
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedFile, setselectedFile] = useState()

    useEffect(() => {
        dispatch(getBlogById())
    }, [])
    const blogById = useSelector(state => state.getBlogById.blogById.blog)

    const deleteBlogById = (deleteId) => {
        dispatch(deleteBlog(deleteId))
    }

    const initialValues = {
        blogTitle: '',
        blogContent: '',
        file: selectedFile
    }

    const validationSchema = Yup.object({
        blogTitle: Yup.string().required('Blog Title Required*'),
        blogContent: Yup.string().required('Blog Content Required*'),
    })

    const onSubmit = (values, onSubmitProps) => {
        let formData = new FormData();
        formData.append('blogTitle', values.blogTitle);
        formData.append('blogContent', values.blogContent);
        formData.append('file', selectedFile);
        
        dispatch(createBlog(formData, onSubmitProps))
        setTimeout(() => {
            dispatch(getBlogById())
            handleClose()
        }, 2000);
    }
    const fileChangeHandler = (e) => {
        setselectedFile(e.target.files[0])
    } 

    return (
        < div >
            <HeaderAndSidebar title="dashbord">
                <div className="row">
                    <div className="col-12  blogbutton">
                        <Button className="blogbutton2" variant="dark" onClick={() => { handleShow() }}>Create Blog</Button >
                    </div>
                </div>
                <div className="row allblog">
                    {isEmpty(blogById) &&
                        <div className="loader">
                            <Loader type="Bars" color="#00BFFF" height={80} width={80} />
                        </div>
                    }
                    {
                        !isEmpty(blogById) &&
                        blogById.map((item, i) => {
                            return (
                                <>
                                    <Card className="blogcard" key={i}
                                        hoverable
                                        style={{ width: 320 }}
                                        cover={
                                            <img
                                                height="250px"
                                                alt="example"
                                                onClick={() => {
                                                    localStorage.setItem('singleBlogId',item._id)
                                                    setTimeout(() => {
                                                        history.push("/singleBlog")
                                                    }, 1000);
                                                }}

                                                src={process.env.REACT_APP_API +"/"+item.blogImagePath}
                                            />
                                        }
                                    >
                                        <div className="row">
                                            <div className="col-8">
                                                <Meta className="blogContent" title={item.blogTitle} description={item.blogContent} />
                                            </div>
                                            <div className="col-4">
                                                <div className="row ">
                                                    <div className="deleteButton">
                                                        <img src={deleteButton} alt="delete" height="95%" width="30%" onClick={() => { deleteBlogById(item._id) }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </>
                            )
                        })
                    }
                </div>



                <Modal show={show} onHide={() => { handleClose() }} className="modal">
                    <Modal.Header closeButton style={{ "outline": "none" }}>
                        <Modal.Title>Create Blog</Modal.Title>
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
                                                        <h1 align="center">Create Blog</h1>
                                                        <FormikControl
                                                            control="input"
                                                            type="text"
                                                            lable="Blog Title*"
                                                            name="blogTitle"
                                                        />

                                                        <FormikControl
                                                            control="input"
                                                            type="text"
                                                            lable="Blog Content*"
                                                            name="blogContent"
                                                        />

                                                        <FormikControl
                                                            control="input"
                                                            type="file"
                                                            lable="Blog Image*"
                                                            name="file"
                                                            onChange = {(e) => fileChangeHandler(e)}
                                                        />

                                                        <div className="btndiv">
                                                            <Button className="button" type="submit" variant="info" >Create</Button>
                                                        </div>
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









            </HeaderAndSidebar>
        </div >
    )
}
export default Dashbord