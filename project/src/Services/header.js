export const header = () => {
    let token = JSON.parse(localStorage.getItem('loginTokenFromApi'))
    return {
        headers: {
            'Authorization': token,
            'content-type': "application/json"
        }
    }
}
