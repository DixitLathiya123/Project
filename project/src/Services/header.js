let token = JSON.parse(localStorage.getItem('loginTokenFromApi'))
export const header = () => {

    return {
        headers: {
            'Authorization': token,
            'content-type': "application/json"
        }
    }
}
