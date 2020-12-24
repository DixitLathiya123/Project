import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../Pages/FormikControl'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux'
import { userGoingForRegister } from '../../Redux/Actions'
import { useHistory } from 'react-router-dom'
import Recaptcha from 'react-google-recaptcha'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {

    const history = useHistory()
    const dispatch = useDispatch()
    const [captcha, setCaptcha] = useState('')

    const state = useSelector(state => state.register.allUser.map((item)=>item.email ))
    console.log(state);

    const initialValues = {
        Name: '',
        PhoneNo: '',
        Pincode: '',
        email: '',
        password: '',
        confimPassword: '',
    }

    const validationSchema = Yup.object({
        Name: Yup.string().required('Name Required*'),
        PhoneNo: Yup.number().typeError('Only Number Allowed').required('PhoneNo Required*'),
        Pincode: Yup.number().typeError('Only Number Allowed').required('Pincode Required*'),
        email: Yup.string().email('Invalid Format*').required('Email Required*'),
        password: Yup.string().length(6).required('Password Required*'),
        confimPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'password miss match*')
            .required('ConfimPassword Required*'),
    })

    const onSubmit = values => {
        if(state.includes(values.email) === true){
            toast.error("Email Already Exist!")
        }
        else{
            setTimeout(() => {
                console.log("form data", values);
                dispatch(userGoingForRegister(values))
                history.push("/login")
            }, 1000);
            toast.success("Register Sucesss!");
        }
    }

    const handlecaptcha = e => setCaptcha(e)

    return (
        <div >
            <ToastContainer />
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
                                        return (
                                            <Form>
                                                <h1 align="center">Sign Up</h1>
                                                <FormikControl
                                                    control="input"
                                                    type="text"
                                                    lable="Name*"
                                                    name="Name"
                                                />

                                                <FormikControl
                                                    control="input"
                                                    type="email"
                                                    lable="Email*"
                                                    name="email"
                                                />

                                                <FormikControl
                                                    control="input"
                                                    type="text"
                                                    lable="PhoneNo*"
                                                    name="PhoneNo"
                                                />

                                                <FormikControl
                                                    control="input"
                                                    type="text"
                                                    lable="Pincode*"
                                                    name="Pincode"
                                                />


                                                <FormikControl
                                                    control="input"
                                                    type="password"
                                                    lable="Password*"
                                                    name="password"
                                                />

                                                <FormikControl
                                                    control="input"
                                                    type="password"
                                                    lable="Confirm Password*"
                                                    name="confimPassword"
                                                />

                                                <label htmlFor="captcha">Captcha</label>
                                                <Recaptcha
                                                    sitekey="6Lf-RwsaAAAAAP42dLJgYMQ8K6oK4xmrFG_NUSWP"
                                                    render="explicit"
                                                    onChange={(e) => { handlecaptcha(e) }}
                                                />

                                                <Button className="button" type="submit" disabled={!formik.isValid || captcha === ''}>Submit</Button>
                                                <Button className="button" type="reset" >Reset</Button>

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

export default Register

