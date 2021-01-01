import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';


import Card from 'react-bootstrap/Card'
import FormikControl from '../Pages/FormikControl'
import { userGoingForLogin } from '../../Redux/Actions'

import 'react-toastify/dist/ReactToastify.css';
import Header from './Header'
import { isAuthenticated } from '../../PrivateRouter/Auth'

function Login(props) {
    const history = useHistory();
    if (isAuthenticated() !== false) {
        history.push("/")
    }
    
    const dispatch = useDispatch()

    const initialValues = {
        email: '',
        password: '',
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Format*').required('Email Required*'),
        password: Yup.string().length(6).required('Password Required*')
    })

    const onSubmit = values => {
        dispatch(userGoingForLogin(values, props))
    }

    return (
        <div className="content">
            <Header />
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
                                                <h1 align="center">Sign In</h1>
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
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login
