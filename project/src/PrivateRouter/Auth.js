
export const isAuthenticated = () => {
    if (localStorage.getItem('loginTokenFromApi')) {
        return localStorage.getItem("loginTokenFromApi")
    }
    else {
        return false
    }
}