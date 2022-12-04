export const authLogin = (userData) => {
    return {
        type: "authLogin",
        payload: userData
    }
}

export const authLogout = (data) => {
    return {
        type: "authLogout",
        payload: data
    }
}