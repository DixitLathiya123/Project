import React from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { Button } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { forgetPassword } from '../../Action/actionIndex'

import Card from 'react-bootstrap/Card'
import {Header,FormikControl} from '../../Components/componentIndex'

function Forgot() {

    const dispatch = useDispatch()
    const initialValues = { email: '', }
    const validationSchema = Yup.object({email: Yup.string().email('Invalid Format*').required('Email Required*')})
    const onSubmit = values =>  dispatch(forgetPassword(values))

    return (
        <div>
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
                                                <h1 align="center">Forgot Password</h1>
                                                <FormikControl
                                                    control="input"
                                                    type="email"
                                                    lable="Email*"
                                                    name="email"
                                                />

                                                <div className="btndivforgot">
                                                    <Button className="button" type="submit" variant="info">Send Password Reset Email</Button>
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
export default Forgot