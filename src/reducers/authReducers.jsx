const initialState = {
    isLoggedin: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case "authLogin":
            return {
                ...state,
                loginData: action.payload,
            }
        case "authLogout":
            return {
                ...state,
                logoutData: action.payload,
            }
        default:
            return state
    }
}

export default authReducer;