import React, { useEffect } from 'react'
import { Formik, Form } from "formik";
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";

import { HeaderAndSidebar, FormikControl } from '../../components/componentIndex'
import { useDispatch, useSelector } from 'react-redux';
import { getUserById, getAllCountry, getAllstate, updateProfile } from '../../action/actionIndex';
import * as Yup from "yup";
import { isEmpty } from '../../services/isEmpty';

function UpdateProfile() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserById())
        dispatch(getAllCountry())
        dispatch(getAllstate(!isEmpty(updateData) && updateData.country));
    }, [])

    const updateData = useSelector(state => state.initialState.getUserById.blogById && state.initialState.getUserById.blogById.data && state.initialState.getUserById.blogById.data[0])
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
        name: !isEmpty(updateData) && updateData.name,
        phoneNo: !isEmpty(updateData) && updateData.phoneNo,
        pinCode: !isEmpty(updateData) && updateData.pinCode,
        email: !isEmpty(updateData) && updateData.email,
        course: !isEmpty(updateData) && updateData.course,
        city: !isEmpty(updateData) && updateData.city,
        state: !isEmpty(updateData) && updateData.state,
        country: !isEmpty(updateData) && updateData.country,
        address: !isEmpty(updateData) && updateData.address,
        skill: !isEmpty(updateData) && updateData.skill,
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

    const onSubmit = (values, onSubmitProps) => {
        dispatch(updateProfile(values, onSubmitProps))
        setTimeout(() => {
            dispatch(getUserById())
        }, 1000);
    };

    return (
        <div>
            <HeaderAndSidebar title="update">
                <div className="row">
                    <div className="col-12  blogbutton">
                        <Button className="blogbutton2" variant="dark"><Link to="/changePassword">Change Password</Link></Button >
                    </div>
                </div>
                <div className="form">
                    <Card className="card">
                        <Card.Body className="cardbody">
                            <div className="row">
                                <div className="col-12">
                                    <h1 align="center">Update Profile</h1>
                                    {
                                        !isEmpty(updateData) &&
                                        <Formik
                                            initialValues={initialValues}
                                            validationSchema={validationSchema}
                                            onSubmit={onSubmit}
                                            enableReinitialize
                                        >
                                            {(formik) => {
                                                return (

                                                    <Form className="formUpdate">
                                                        <div className="row">
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <FormikControl
                                                                        control="input"
                                                                        type="text"
                                                                        lable="Name*"
                                                                        name="name"
                                                                        value={formik.values.name}
                                                                        onChange={formik.handleChange}
                                                                    />
                                                                    <FormikControl
                                                                        control="input"
                                                                        type="email"
                                                                        lable="Email*"
                                                                        name="email"
                                                                        value={formik.values.email}
                                                                    />
                                                                    <FormikControl
                                                                        control="input"
                                                                        type="text"
                                                                        lable="PhoneNo*"
                                                                        name="phoneNo"
                                                                        value={formik.values.phoneNo}
                                                                    />
                                                                    <FormikControl
                                                                        control="select"
                                                                        lable="Select Course*"
                                                                        name="course"
                                                                        option={option}
                                                                        value={formik.values.course}
                                                                    />
                                                                    <FormikControl
                                                                        control="country"
                                                                        lable="Select Country*"
                                                                        name="country"
                                                                        option={CountryData}
                                                                        validate={validateCountry}
                                                                        value={formik.values.country}
                                                                    />
                                                                </div>
                                                                <div className="col-6">
                                                                    <FormikControl
                                                                        control="state"
                                                                        lable="Select State*"
                                                                        name="state"
                                                                        option={StatesData}
                                                                        validate={validateState}
                                                                        value={formik.values.state}
                                                                    />
                                                                    <FormikControl
                                                                        control="input"
                                                                        type="text"
                                                                        lable="City*"
                                                                        name="city"
                                                                        value={formik.values.city}
                                                                    />
                                                                    <FormikControl
                                                                        control="checkbox"
                                                                        lable="Skill*"
                                                                        name="skill"
                                                                        validate={validateSkills}
                                                                        options={checkBoxOptions}
                                                                        data={formik.values.skill}
                                                                    />
                                                                    <FormikControl
                                                                        control="input"
                                                                        type="text"
                                                                        lable="Pincode*"
                                                                        name="pinCode"
                                                                        value={formik.values.pinCode}
                                                                    />

                                                                    <FormikControl
                                                                        control="textarea"
                                                                        lable="Address*"
                                                                        name="address"
                                                                        value={formik.values.address}
                                                                    />
                                                                </div>
                                                                <div className="row" style={{ 'width': '100%' }}>
                                                                    <div className="col-12" align="center" >
                                                                        <Button
                                                                            className="button"
                                                                            type="submit"
                                                                            variant="success"
                                                                            disabled={!formik.isValid}
                                                                        >
                                                                            Update
                                                                        </Button>
                                                                        {/* <Button className="button" type="reset" variant="info">
                                                                            Reset
                                                                        </Button> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                );
                                            }}
                                        </Formik>
                                    }
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </HeaderAndSidebar>
        </div>
    )
}
export default UpdateProfile