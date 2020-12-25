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
import Header from './Header'

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
            dispatch(userGoingForLogin(values))
            history.push('/dash')
        }, 1000);
        toast.success("Login Sucesss!");
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
