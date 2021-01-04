// import React from 'react'
// import { Formik, Form } from 'formik'
// import * as Yup from 'yup'
// import { Button } from 'react-bootstrap'
// import { ToastContainer } from 'react-toastify';
// import { useDispatch } from "react-redux";
// import { useHistory } from 'react-router-dom';

// import FormikControl from '../../PublicFolder/Pages/FormikControl'
// import { createBlog } from '../../Redux/Actions';
// import Card from 'react-bootstrap/Card'
// import 'react-toastify/dist/ReactToastify.css';
// import HeaderAndSidebar from '../Header/HeaderAndSidebar'

// function CreateBlog() {
//     const history = useHistory()
//     const dispatch = useDispatch();

//     const initialValues = {
//         blogTitle: '',
//         blogContent: '',
//         file:''
//     }

//     const validationSchema = Yup.object({
//         blogTitle: Yup.string().required('Blog Title Required*'),
//         blogContent: Yup.string().required('Blog Content Required*'),
//         file: Yup.string().required('Blog Image Required*')
//     })

//     const onSubmit = (values,onSubmitProps) => {
//         console.log(new FormData(values));
//         dispatch(createBlog(new FormData(values),onSubmitProps))
//         setTimeout(() => {
//             history.push("/dashbord")
//         }, 2000);
//     }
//     return (
//         < div >
//             <HeaderAndSidebar title="dashbord">
//                 <ToastContainer />
//                 <Card className="cardLogin">
//                     <Card.Body className="cardLoginBody">
//                         <div className="row" style={{ "justifyContent": "center" }}>
//                             <div className="form col-6" >
//                                 <Formik
//                                     initialValues={initialValues}
//                                     validationSchema={validationSchema}
//                                     onSubmit={onSubmit}
//                                 >
//                                     {
//                                         (formik) => {
//                                             return (
//                                                 <Form>
//                                                     <h1 align="center">Create Blog</h1>
//                                                     <FormikControl
//                                                         control="input"
//                                                         type="text"
//                                                         lable="Blog Title*"
//                                                         name="blogTitle"
//                                                     />

//                                                     <FormikControl
//                                                         control="input"
//                                                         type="text"
//                                                         lable="Blog Content*"
//                                                         name="blogContent"
//                                                     />

//                                                     <FormikControl
//                                                         control="input"
//                                                         type="file"
//                                                         lable="Blog Image*"
//                                                         name="file"
//                                                     />

//                                                     <div className="btndiv">
//                                                         <Button className="button" type="submit" variant="info">Create</Button>
//                                                     </div>
//                                                 </Form>
//                                             )
//                                         }
//                                     }
//                                 </Formik>
//                             </div>
//                         </div>
//                     </Card.Body>
//                 </Card>
//             </HeaderAndSidebar>
//         </div >
//     )
// }
// export default CreateBlog