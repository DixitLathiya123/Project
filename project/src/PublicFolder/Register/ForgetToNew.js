import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { Button } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux'

import { forgetToNewPassword } from '../../Redux/Actions'
import Card from 'react-bootstrap/Card'
import FormikControl from '../Pages/FormikControl'

import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';

function ForgetToNew() {

    const dispatch = useDispatch()
    const [url, setUrl] = useState()

    useEffect(() => {
        let url = window.location.pathname.split('/')
        let urlToken = url[url.length - 1]
        setUrl(urlToken)
    }, [])

    const initialValues = {
        password: '',
        Token: url
    }

    const validationSchema = Yup.object({
        password: Yup.string().length(6).required('Password Required*')
    })

    const onSubmit = values => {
        dispatch(forgetToNewPassword(values))
    }

    return (
        <div>
            <Header />
            <ToastContainer />
            <Card className="cardLogin">
                <Card.Body className="cardLoginBody">
                    <div className="row" style={{ "justify-content": "center" }}>
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
                                                <h1 align="center">New Password</h1>
                                                <FormikControl
                                                    control="input"
                                                    type="password"
                                                    lable="Password*"
                                                    name="password"
                                                />

                                                <div className="btndivforgot">
                                                    <Button className="button" type="submit" variant="info">Change Password</Button>
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
        </div>
    )
}

export default ForgetToNew

