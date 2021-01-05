export const headerWithToken = () => {
    let token = JSON.parse(localStorage.getItem('loginTokenFromApi'))
    return {
        headers: {
            'Authorization': token,
            'content-type': "application/json"
        }
    }
}

export const headerWithOutToken = () => {
    return {
        headers: {
            'content-type': "application/json"
        }
    }
}

export const headerForFormData = () => {
    let token = JSON.parse(localStorage.getItem('loginTokenFromApi'))
    return {
        headers: {
            'Authorization': token,
            'Content-Type': 'multipart/form-data',
        }
    }
}