export const postLogin = (userData) => {
    return {
        type: "postLogin",
        payload: userData
    }
}

export const authLogin = (userData) => {
    return {
        type: "authLogin",
        payload: userData
    }
}

export const loggedStatus = () => {
    return {
        type: "loggedStatus"
    }
}

export const authLogout = (data) => {
    return {
        type: "authLogout",
        payload: data
    }
}