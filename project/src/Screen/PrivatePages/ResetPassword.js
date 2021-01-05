import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card'

import {HeaderAndSidebar,FormikControl} from '../../Components/componentIndex'
import { changePassword } from '../../Action/actionIndex';

function ResetPassword() {
    const history = useHistory()
    const dispatch = useDispatch();

    const initialValues = {
        newPassword: '',
        oldPassword: '',
    }

    const changePasswordStatus = useSelector(state => state.initialState.ChangePassword.ReturnCode)

    const validationSchema = Yup.object({
        newPassword: Yup.string().length(6).required("New Password required *"),
        oldPassword: Yup.string().length(6).required("Old Password required *"),
    })

    const onSubmit = (values, onSubmitProps) => {
        dispatch(changePassword(values, onSubmitProps))
        if (changePasswordStatus !== "" && changePasswordStatus === 0) {
            setTimeout(() => {
                history.push("/dashbord")
            }, 5000);
        }
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
                                                    <h1 align="center">Reset Password</h1>
                                                    <FormikControl
                                                        control="input"
                                                        type="text"
                                                        lable="Old Password*"
                                                        name="oldPassword"
                                                    />
                                                    <FormikControl
                                                        control="input"
                                                        type="text"
                                                        lable="New Password*"
                                                        name="newPassword"
                                                    />
                                                    <div className="btndiv">
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
            </HeaderAndSidebar>
        </div >
    )
}
export default ResetPassword