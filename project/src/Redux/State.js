export const initialState = {
    loading : false,
    error : '',
    message :'',
    Register:{
        ResponseStatus:'',
    },
    Login:{
        LoginToken:'',
        LoginStatus:'',
    },
    countries:{
        CountryData:[],
    },
    states:{
        StateData:[],
    },
    Messages:{
        ResponseStatus:'',
    },
    Forget:{
        ReturnCode:'',
    },
    ForgetToNew:{
        ReturnCode:'',
    },
    createBlog:{
        ResponseStatus:'',
    },
    deleteBlog:{
        ResponseStatus:'',
    },
    getUserById:{
        UserById :[],
    },
    ChangePassword:{
        ReturnCode:'',
    },
    updateProfile:{
        ResponseStatus:'',
    },
}

// export const Register = {
//     loading : false,
//     ResponseStatus :'',
//     message:'',
//     error : ''
// }

// export const Login = {
//     loading : false,
//     LoginToken : '',
//     LoginStatus:'',
//     message:'',
//     error : ''
// }

// export const Country ={
//     loading : false,
//     CountryData:[],
//     error:''
// }

// export const States ={
//     loading : false,
//     StateData:[],
//     error:''
// }

// export const Message ={
//     loading : false,
//     ResponseStatus :'',
//     message:'',
//     error : ''
// }

// export const Forget ={
//     loading : false,
//     ReturnCode :'',
//     message:'',
//     error : ''
// }

// export const ForgetToNew ={
//     loading : false,
//     ReturnCode :'',
//     message:'',
//     error : ''
// }

// export const createBlog ={
//     loading : false,
//     ResponseStatus :'',
//     message:'',
//     error : ''
// }

// export const deleteBlog ={
//     loading : false,
//     ResponseStatus :'',
//     message:'',
//     error : ''
// }

// export const getUserById ={
//     loading : false,
//     UserById :[],
//     message:'',
//     error : ''
// }

// export const ChangePassword ={
//     loading : false,
//     ReturnCode :'',
//     message:'',
//     error : ''
// }

// export const updateProfile ={
//     loading : false,
//     ResponseStatus :'',
//     message:'',
//     error : ''
// }
export const getAllBlog ={
    loading : false,
    Blogs: [],
    message:'',
    error : ''
}
export const getBlogById ={
    loading : false,
    blogById :[],
    message:'',
    error : ''
}
