import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../Pages/FormikControl'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux'
import { userGoingForLogin } from '../../Redux/Actions'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const dispatch = useDispatch()

    const history = useHistory();
    const initialValues = {
        email: '',
        password: '',
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Format*').required('Email Required*'),
        password: Yup.string().length(6).required('Password Required*')
    })

    const onSubmit = values => {
        setTimeout(() => {
            console.log("form data", values);
            dispatch(userGoingForLogin(values))
        }, 1000);
        toast.success("Login Sucesss!");
    }

    return (
        <div >
            <ToastContainer />
            <Card className="card">
                <Card.Body className="cardbody">
                    <Button className="webButton" onClick={() => { history.push(`/`); }}>Back To WebSite</Button >
                    <div className="row">
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

                                                <Button className="button" type="submit">Login</Button>
                                                <Button className="button" onClick={() => { history.push(`/register`); }}>Register</Button >

                                            </Form>
                                        )
                                    }
                                }
                            </Formik>
                        </div>
                        <div className="image col-6" align="left">
                            <img src="https://symbiotics.co.za/wp-content/uploads/2016/01/Social-login.png" height="100%" width="99%" alt="Login With Social Media" />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login
