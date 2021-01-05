import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { useDispatch } from 'react-redux'

import {Header,FormikControl} from '../../Components/componentIndex'
import { isAuthenticated } from '../../Routes/Auth'
import { userSendContact } from '../../Action/actionIndex'
import { isEmpty } from '../../Services/isEmpty'

function Contact() {
    const history = useHistory()
    if (isAuthenticated() !== false) {
        history.push("/dashbord")
    }
    const dispatch = useDispatch()
    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    }
    let count = 0
    const validationSchema = Yup.object({
        name: Yup.string().required('name required*'),
        email: Yup.string().email('Invalid Format*').required('email required*'),
        message: Yup.string().required('message required*'),
    })
    const PhoneValidation = (phone) => {
        isNaN(phone)
        let error;
        if(isEmpty(phone)){
            error = "phoneNo required!"
        }
        else if(phone.length !== 10){
            error = "phoneNo length must be 10"
        }
        if(isNaN(phone) === true){
            error = "Only Number Allowed"
        }
        return error
    }

    const validateMessage = (message) => {
        count = message.length
        let error;
        if (message === '') {
            error = "required!";
        }
        return error;
    }

    const onSubmit = values => {
        dispatch(userSendContact(values))
    }
    return (
        <div>
            <Header />
            <Card className="card">
                <Card.Body className="cardbody">
                    <div className="row">
                        <div className="form col-4" >
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                {
                                    (formik) => {
                                        return (
                                            <Form>
                                                <h1 align="center">Contact Us</h1>
                                                <FormikControl
                                                    control="input"
                                                    type="text"
                                                    lable="Name *"
                                                    name="name"
                                                />
                                                <FormikControl
                                                    control="input"
                                                    type="email"
                                                    lable="Email *"
                                                    name="email"
                                                />
                                                <FormikControl
                                                    control="textarea"
                                                    lable="Message *"
                                                    name="message"
                                                    validate={validateMessage}
                                                    maxlength="30"
                                                />
                                                <div style={{ "display": "flex", "justify-content": "flex-end" }}>
                                                    {count}/30
                                                </div>
                                                <FormikControl
                                                    control="input"
                                                    type="text"
                                                    lable="PhoneNo *"
                                                    name="phoneNumber"
                                                    validate={PhoneValidation}
                                                />
                                                <Button className="button" type="submit">Submit</Button>
                                                <Button className="button" type="reset" >Reset</Button>
                                            </Form>
                                        )
                                    }
                                }
                            </Formik>
                        </div>
                        <div className="col-4" align="left">
                            <h1>About Company</h1>
                            <div>
                                <h5><b>Contact-No:</b></h5>
                                <h6>IND:+91 9096932144 USA:+1 (619) 752 3485</h6>
                            </div>
                            <div>
                                <h5><b>Email:</b></h5>
                                <h6> bluesoft@gmail.com</h6>
                            </div>
                            <div>
                                <h5><b>Corporate Office:</b></h5>
                                <h6> B-240,Royal Plaza,Near Bapa-SitaramChowk,
                                JakatNaka Surat</h6>
                            </div>
                            <div>
                                <h5><b>USA Office:</b></h5>
                                <h6> 2535 Kettner Blvd.,Suite 3-A2,
                                San Diego, CA 92101</h6>
                            </div>
                        </div>
                        <div className="col-4" align="left">
                            <h1>Our Location</h1>
                            <FormikControl
                                control='map'
                            />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div >
    )
}
export default Contact