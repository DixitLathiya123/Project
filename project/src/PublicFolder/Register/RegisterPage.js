import React, { useState, useEffect } from "react";
import { Formik, Form} from "formik";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";


import Card from "react-bootstrap/Card";
import Recaptcha from "react-google-recaptcha";
import * as Yup from "yup";

import FormikControl from "../Pages/FormikControl";
import Header from "./Header";
import { isAuthenticated } from '../../PrivateRouter/Auth'
import { userGoingForRegister, getAllCountry, getAllstate } from "../../Redux/Actions";

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

function Register(props) {
    const history = useHistory()

    if(isAuthenticated() !== false){
         history.push("/")
    }
    const dispatch = useDispatch();
    const [captcha, setCaptcha] = useState("");
    
    const CountryData = useSelector(state => state.country.CountryData)
    const StatesData = useSelector(state => state.states.StateData)
    
    
    useEffect(() => {
        dispatch(getAllCountry())
    }, [])
    
    const initialValues = {
        name: "",
        phoneNo: "",
        pinCode: "",
        email: "",
        password: "",
        confirmPassword: "",
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
        password: Yup.string().length(6).required("Password required *"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "password miss match*")
            .required("ConfimPassword required *"),
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
        else{
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

    const onSubmit = (values) => {
        dispatch(userGoingForRegister(values,props));
    };

    const handlecaptcha = (e) => setCaptcha(e);

    return (
        <div>
            <Header />
            <ToastContainer />
            <Card className="card">
                <Card.Body className="cardbody">
                    <div className="row">
                        <div className="form col-8">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                {(formik) => {
                                    return (
                                        <Form>
                                            <h1 align="center">Sign Up</h1>
                                            <div className="row">
                                                <div className="col-6">
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
                                                </div>
                                                <div className="col-6">
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
                                                        control="input"
                                                        type="password"
                                                        lable="Password*"
                                                        name="password"
                                                    />
                                                    <FormikControl
                                                        control="input"
                                                        type="password"
                                                        lable="Confirm Password*"
                                                        name="confirmPassword"
                                                    />
                                                    <FormikControl
                                                        control="textarea"
                                                        lable="Address*"
                                                        name="address"
                                                    />
                                                    <label htmlFor="captcha">Captcha</label>
                                                    <Recaptcha
                                                        sitekey="6Lf-RwsaAAAAAP42dLJgYMQ8K6oK4xmrFG_NUSWP"
                                                        render="explicit"
                                                        onChange={(e) => {
                                                            handlecaptcha(e);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <Button
                                                    className="button"
                                                    type="submit"
                                                    variant="success"
                                                    disabled={!formik.isValid || captcha === ""}
                                                >
                                                    Submit
                                                 </Button>
                                                <Button className="button" type="reset" variant="info">
                                                    Reset
                                            </Button>
                                            </div>
                                        </Form>
                                    );
                                }}
                            </Formik>
                        </div>
                        <div className="image col-4">
                            <img
                                src="https://i.pinimg.com/originals/f1/a3/c0/f1a3c03479f4437eb83d26eb1f13ae71.png"
                                height="80%"
                                width="85%"
                                alt="Login With Social Media"
                            />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Register;
