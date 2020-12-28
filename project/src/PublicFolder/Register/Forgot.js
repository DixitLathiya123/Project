import React from 'react'
import { Formik, Form } from 'formik'
import { Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';

import Card from 'react-bootstrap/Card'
import FormikControl from '../Pages/FormikControl'

import 'react-toastify/dist/ReactToastify.css';

function Forgot() {
    return (
        <div>
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

                                                <div className="btndiv">
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
