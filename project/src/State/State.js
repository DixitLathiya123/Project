export const initialState = {
    loading : false,
    error : '',
    message :'',
    Register:{
        ResponseStatus:'',
    },
    Login:{
        LoginData:[],
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
    comments:{
        ResponseStatus:'',
    },
    Likes:{
        ResponseStatus:'',
    }
}

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
