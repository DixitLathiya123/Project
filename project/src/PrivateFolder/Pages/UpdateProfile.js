import React, { useEffect, useState } from 'react'
import { Formik, Form } from "formik";
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";

import FormikControl from "../../PublicFolder/Pages/FormikControl";
import { useDispatch, useSelector } from 'react-redux';
import { getUserById, getAllCountry, getAllstate ,updateProfile } from '../../Redux/Actions';
import HeaderAndSidebar from '../Header/HeaderAndSidebar'
import * as Yup from "yup";

function UpdateProfile() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserById())
        dispatch(getAllCountry())
    }, [])

    const CountryData = useSelector(state => state.initialState.countries.CountryData)
    const StatesData = useSelector(state => state.initialState.states.StateData)

    const option = [
        { key: "Select Course", value: "" },
        { key: "BCA", value: "bca" },
        { key: "BBA", value: "bba" },
        { key: "BCOM", value: "bcom" },
    ];

    const checkBoxOptions = [
        { key: "Cricket", value: "cricket" },
        { key: "Reading", value: "reading" },
    ];

    const initialValues = {
        name: "",
        phoneNo: "",
        pinCode: "",
        email: "",
        course: "",
        city: "",
        state: "",
        country: "",
        address: "",
        skill: [],
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Name required *"),
        phoneNo: Yup.number()
            .typeError("Only Number Allowed")
            .required("PhoneNo required *"),
        pinCode: Yup.number()
            .typeError("Only Number Allowed")
            .required("Pincode required *"),
        email: Yup.string().email("Invalid Format*").required("Email required *"),
        course: Yup.string().required("Course required *"),
        city: Yup.string().required("City required *"),
        address: Yup.string().required("Address required *"),
    });

    const validateSkills = (values) => {
        let error;
        if (values.length === 0) {
            error = "Required!";
        }
        return error;
    };
    const validateCountry = (values) => {
        let error;
        if (values === '') {
            error = "Required!";
        }
        else {
            dispatch(getAllstate(values));
        }
        return error;
    };
    const validateState = (values) => {
        let error;
        if (values === '') {
            error = "Required!";
        }
        return error;
    };

    const onSubmit = (values,onSubmitProps) => {
      dispatch(updateProfile(values,onSubmitProps))  
    };

    return (
        <div>
            <HeaderAndSidebar title="update">
                <div className="row">
                    <div className="col-12  blogbutton">
                        <Button className="blogbutton2" variant="dark"><Link to="/resetPassword">Reset Password</Link></Button >
                    </div>
                </div>
                <div className="form">
                    <Card className="card">
                        <Card.Body className="cardbody">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                {(formik) => {
                                    return (
                                        <Form className="formUpdate">
                                            <div >
                                                <h1 align="center">Update Profile</h1>
                                                <FormikControl
                                                    control="input"
                                                    type="text"
                                                    lable="Name*"
                                                    name="name"
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
                                                    name="phoneNo"
                                                />
                                                <FormikControl
                                                    control="select"
                                                    lable="Select Course*"
                                                    name="course"
                                                    option={option}
                                                />
                                                <FormikControl
                                                    control="country"
                                                    lable="Select Country*"
                                                    name="country"
                                                    option={CountryData}
                                                    validate={validateCountry}
                                                />
                                                <FormikControl
                                                    control="state"
                                                    lable="Select State*"
                                                    name="state"
                                                    option={StatesData}
                                                    validate={validateState}
                                                />
                                                <FormikControl
                                                    control="input"
                                                    type="text"
                                                    lable="City*"
                                                    name="city"
                                                />
                                                <FormikControl
                                                    control="checkbox"
                                                    lable="Skill*"
                                                    name="skill"
                                                    validate={validateSkills}
                                                    options={checkBoxOptions}
                                                />
                                                <FormikControl
                                                    control="input"
                                                    type="text"
                                                    lable="Pincode*"
                                                    name="pinCode"
                                                />

                                                <FormikControl
                                                    control="textarea"
                                                    lable="Address*"
                                                    name="address"
                                                />
                                                <div className="text-center">
                                                    <Button
                                                        className="button"
                                                        type="submit"
                                                        variant="success"
                                                        disabled={!formik.isValid}
                                                    >
                                                        Update
                                                 </Button>
                                                    <Button className="button" type="reset" variant="info">
                                                        Reset
                                            </Button>
                                                </div>
                                            </div>
                                        </Form>
                                    );
                                }}
                            </Formik>
                        </Card.Body>
                    </Card>
                </div>
            </HeaderAndSidebar>
        </div>
    )
}
export default UpdateProfile