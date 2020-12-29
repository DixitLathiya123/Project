import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import FormikControl from '../../PublicFolder/Pages/FormikControl'
import { useDispatch } from "react-redux";


import { createBlog } from '../../Redux/Actions';
import Card from 'react-bootstrap/Card'
import 'react-toastify/dist/ReactToastify.css';
import HeaderAndSidebar from '../Header/HeaderAndSidebar'

function CreateBlog() {

    const dispatch = useDispatch();

    const initialValues = {
        blogTitle: '',
        blogContent: '',
    }

    const validationSchema = Yup.object({
        blogTitle: Yup.string().required('Blog Title Required*'),
        blogContent: Yup.string().required('Blog Content Required*')
    })

    const onSubmit = (values,onSubmitProps) => {
        console.log(values);
        dispatch(createBlog(values,onSubmitProps))
    }

    return (
        < div >
            <HeaderAndSidebar title="dashbord">
                <ToastContainer />
                <Card className="cardLogin">
                    <Card.Body className="cardLoginBody">
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
                                                    <div className="btndiv">
                                                        <Button className="button" type="submit" variant="info">Create</Button>
                                                    </div>
                                                </Form>
                                            )
                                        }
                                    }
                                </Formik>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </HeaderAndSidebar>
        </div >

    )
}


export default CreateBlog
