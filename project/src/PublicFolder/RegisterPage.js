import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './Pages/FormikControl'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

function Register() {


    const initialValues = {
        Name: '',
        PhoneNo: '',
        Pincode: '',
        email: '',
        password: '',
        confimPassword: '',
    }

    const validationSchema = Yup.object({
        Name: Yup.string().required('Required*'),
        PhoneNo: Yup.string().required('Required*'),
        Pincode: Yup.string().required('Required*'),
        email: Yup.string().email('Invalid Format*').required('Required*'),
        password: Yup.string().required('Required*'),
        confimPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'password miss match*')
            .required('Required*'),
    })

    const onSubmit = values => {
        console.log("form data", values);
    }

    return (
        <div >
            <Card className="card">
                <Card.Body className="cardbody">
                    <div className="row">
                        <div className="form col-6" >

                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                {
                                    (formik) => {
                                        console.log(formik);
                                        return (
                                            <Form>
                                                <FormikControl
                                                    control="input"
                                                    type="text"
                                                    lable="Name"
                                                    name="Name"
                                                />

                                                <FormikControl
                                                    control="input"
                                                    type="text"
                                                    lable="PhoneNo"
                                                    name="PhoneNo"
                                                />

                                                <FormikControl
                                                    control="input"
                                                    type="text"
                                                    lable="Pincode"
                                                    name="Pincode"
                                                />

                                                <FormikControl
                                                    control="input"
                                                    type="email"
                                                    lable="Email"
                                                    name="email"
                                                />

                                                <FormikControl
                                                    control="input"
                                                    type="password"
                                                    lable="Password"
                                                    name="password"
                                                />

                                                <FormikControl
                                                    control="input"
                                                    type="password"
                                                    lable="Confirm Password"
                                                    name="confimPassword"
                                                />

                                                <Button align="center" className="button" type="submit" disabled={!formik.isValid}>Submit</Button>

                                            </Form>
                                        )
                                    }
                                }
                            </Formik>
                        </div>
                        <div className="image col-6" align="left">
                            <img src="https://i.pinimg.com/originals/f1/a3/c0/f1a3c03479f4437eb83d26eb1f13ae71.png" height="85%" width="80%" alt="Login With Social Media" />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Register

